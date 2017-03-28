import moment from 'moment'
import { database } from '../index'

const apiHost = __API_HOST__

export const requestTransactions = () => {
  return { type: 'REQUEST_TRANSACTIONS' }
}

export const receiveTransactions = (json) => {
  return { type: 'RECEIVE_TRANSACTIONS', transactions: json.transactions }
}

export const fetchTransactions = (token, selectedMonthNumber) => {
  return (dispatch) => {
    dispatch(requestTransactions())

    const selectedDate = moment.utc().month(selectedMonthNumber - 1)

    const from = selectedDate.startOf('month').utc().format()
    const to = selectedDate.endOf('month').utc().format()
    const headers = { 'Authorization': `Bearer: ${token}` }

    return window.fetch(`${apiHost}/transactions.json?from=${from}&to=${to}`, { headers })
      .then(response => response.json())
      .then(json => dispatch(receiveTransactions(json)))
  }
}

export const requestCategories = () => {
  return { type: 'REQUEST_CATEGORIES' }
}

export const receiveCategories = (categories) => {
  return { type: 'RECEIVE_CATEGORIES', categories }
}

export const fetchCategories = uid => {
  return dispatch => {
    dispatch(requestCategories())

    return database.ref(`/users/${uid}/categories`).once('value')
      .then(snapshot => dispatch(receiveCategories(snapshot.val())))
  }
}

export const startUserSetup = () => {
  return { type: 'START_USER_SETUP' }
}

export const addUser = (user) => {
  return { type: 'ADD_USER', user }
}

export const requestToken = () => {
  return { type: 'REQUEST_TOKEN' }
}

export const receiveToken = (token) => {
  return dispatch => {
    return new Promise(resolve => resolve(dispatch({ type: 'RECEIVE_TOKEN', token })))
  }
}

export const userSetup = user => {
  return (dispatch, getState) => {
    dispatch(startUserSetup())
    dispatch(addUser(user))
    dispatch(requestToken())

    return user.getToken(true)
      .then(token => dispatch(receiveToken(token)))
      .then(() => {
        const { token, user } = getState()

        const transactions = dispatch(fetchTransactions(token.value, 2))
        const categories = dispatch(fetchCategories(user.data.uid))

        return Promise.all([ transactions, categories ])
      })
      .then(() => dispatch(sucessfullUserSetup()))
  }
}

export const sucessfullUserSetup = () => {
  return { type: 'SUCCESSFUL_USER_SETUP' }
}

export const noUser = () => {
  return { type: 'NO_USER', user: null }
}
