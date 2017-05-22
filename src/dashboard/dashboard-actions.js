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

    const selectedDate = moment.utc().month(selectedMonthNumber)

    const from = selectedDate.startOf('month').utc().format()
    const to = selectedDate.endOf('month').utc().format()
    const headers = { 'Authorization': `Bearer: ${token}` }

    return window.fetch(`${apiHost}/transactions?from=${from}&to=${to}`, { headers })
      .then(response => response.json())
      .then(json => dispatch(receiveTransactions(json)))
  }
}

export const requestUserData = () => {
  return { type: 'REQUEST_USER_DATA' }
}

export const receiveUserData = data => {
  return { type: 'RECEIVE_USER_DATA', data }
}

export const fetchUserData = uid => {
  return dispatch => {
    dispatch(requestUserData())

    return database.ref(`/users/${uid}`).once('value')
      .then(snapshot => dispatch(receiveUserData(snapshot.val())))
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
        const { token, user, selectedMonth } = getState()

        const transactions = dispatch(fetchTransactions(token.value, selectedMonth.number))
        const userData = dispatch(fetchUserData(user.data.uid))

        return Promise.all([ transactions, userData ])
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
