const apiHost = __API_HOST__

const refreshMonthRequest = () => {
  return { type: 'REFRESH_MONTH_REQUEST' }
}

const refreshMonthSuccess = () => {
  return { type: 'REFRESH_MONTH_SUCCESS' }
}

const refreshMonth = monthNumber => {
  return (dispatch, getState) => {
    dispatch(refreshMonthRequest())

    const token = getState().token.value
    const headers = { 'Authorization': `Bearer: ${token}`, 'Content-Type': 'application/json' }
    const method = 'POST'
    const body = `{
      "jsonrpc": "2.0",
      "method": "refreshMonth",
      "params": { "month": ${monthNumber} }
    }`

    return window.fetch(`${apiHost}/rpc`, { headers, method, body })
      .then(() => dispatch(refreshMonthSuccess()))
  }
}

export default refreshMonth
