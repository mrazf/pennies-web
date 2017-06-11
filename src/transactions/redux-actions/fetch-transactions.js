import moment from 'moment'

const apiHost = __API_HOST__

const requestTransactions = () => {
  return { type: 'REQUEST_TRANSACTIONS' }
}

const receiveTransactions = (json) => {
  return { type: 'RECEIVE_TRANSACTIONS', transactions: json.transactions }
}

const fetchTransactions = (token, month) => {
  return (dispatch) => {
    dispatch(requestTransactions())

    const selectedDate = moment.utc().month(month)

    const from = selectedDate.startOf('month').utc().format()
    const to = selectedDate.endOf('month').utc().format()
    const headers = {
      'Authorization': `Bearer: ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    return window.fetch(`${apiHost}/transactions?from=${from}&to=${to}`, { headers })
      .then(response => response.json())
      .then(json => dispatch(receiveTransactions(json)))
  }
}

export default fetchTransactions
