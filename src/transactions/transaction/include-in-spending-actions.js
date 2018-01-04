const apiHost = __API_HOST__

export const changeIncludeInSpendingRequest = transaction => {
  return { type: 'INCLUDE_IN_SPENDING_REQUEST', transaction }
}

export const changeIncludeInSpendingSuccess = transaction => {
  return { type: 'INCLUDE_IN_SPENDING_SUCCESS', transaction }
}

export const changeIncludeInSpendingFailure = transaction => {
  return { type: 'INCLUDE_IN_SPENDING_FAILURE', transaction }
}

export const changeIncludeInSpending = (transaction) => {
  return (dispatch, getState) => {
    dispatch(changeIncludeInSpendingRequest(transaction))

    const token = getState().user.token
    const method = 'POST'
    const body = JSON.stringify({ transaction: { ...transaction } })
    const headers = {
      'Authorization': `Bearer: ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    return window.fetch(`${apiHost}/transactions/${transaction.id}`, { headers, method, body })
      .then(response => response.json())
      .then(json => dispatch(changeIncludeInSpendingSuccess(json.transaction)))
      .catch(err => dispatch(changeIncludeInSpendingFailure(err)))
  }
}
