import { fetchTransactions } from '../dashboard/dashboard-actions'

const apiHost = __API_HOST__

const monthChangeSuccess = month => {
  return { type: 'TRANSACTIONS_MONTH_CHANGE', month }
}

export const monthChange = month => {
  return dispatch => {
    return dispatch(fetchTransactions(month))
      .then(() => dispatch(monthChangeSuccess(month)))
  }
}

export const categoryUpdateRequest = transaction => {
  return { type: 'CATEGORY_UPDATE_REQUEST', transaction }
}

export const categoryUpdateSuccess = transaction => {
  return { type: 'CATEGORY_UPDATE_SUCCESS', transaction }
}

export const categoryUpdateFailure = err => {
  console.log(err)
  return { type: 'CATEGORY_UPDATE_FAILURE' }
}

export const updateCategory = (transaction, rowIndex, categoryId) => {
  return (dispatch, getState) => {
    dispatch(categoryUpdateRequest(transaction))

    const token = getState().token.value
    const method = 'POST'
    const body = JSON.stringify({
      transaction: { ...transaction, categoryId },
      metadata: { rowIndex }
    })
    const headers = {
      'Authorization': `Bearer: ${token}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    return window.fetch(`${apiHost}/transactions/${transaction.id}`, { headers, method, body })
      .then(response => response.json())
      .then(json => dispatch(categoryUpdateSuccess(json.transaction)))
      .catch(err => dispatch(categoryUpdateFailure(err)))
  }
}