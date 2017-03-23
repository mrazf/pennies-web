const apiHost = __API_HOST__

export const requestTransactions = () => {
  return { type: 'REQUEST_TRANSACTIONS' }
}

export const receiveTransactions = (json) => {
  return { type: 'RECEIVE_TRANSACTIONS', transactions: json.transactions }
}

export const fetchTransactions = (token) => {
  return (dispatch) => {
    dispatch(requestTransactions())

    const headers = { 'Authorization': `Bearer: ${token}` }

    return window.fetch(`${apiHost}/transactions`, { headers })
      .then(response => response.json())
      .then(json => dispatch(receiveTransactions(json)))
  }
}
