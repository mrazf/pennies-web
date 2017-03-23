export const addUser = (user) => {
  return { type: 'ADD_USER', user }
}

export const noUser = () => {
  return { type: 'NO_USER', user: null }
}

export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS'
export const requestTransactions = () => {
  return { type: REQUEST_TRANSACTIONS }
}

export const RECEIVE_TOKEN = 'RECEIVE_TOKEN'
export const receiveToken = (token) => {
  return { type: RECEIVE_TOKEN, token }
}

export const REQUEST_TOKEN = 'REQUEST_TOKEN'
export const requestToken = () => {
  return { type: REQUEST_TOKEN }
}

export const FETCH_TOKEN = 'FETCH_TOKEN'
export const fetchToken = (user) => {
  return function (dispatch) {
    dispatch(requestToken())

    return user.getToken(true)
      .then(token => dispatch(receiveToken(token)))
  }
}

export const receiveTransactions = (json) => {
  return { type: 'RECEIVE_TRANSACTIONS', transactions: json.transactions }
}

export const fetchTransactions = () => {
  return (dispatch) => {
    dispatch(requestTransactions)

    return window.fetch(`/transactions`)
      .then(response => response.json())
      .then(json => dispatch(receiveTransactions(json)))
  }
}
