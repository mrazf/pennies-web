import moment from 'moment'

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
