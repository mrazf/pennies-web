const requestToken = () => {
  return { type: 'REQUEST_TOKEN' }
}

const receiveToken = ({ user, token }) => {
  return { type: 'RECEIVE_TOKEN', user, token }
}

export const userSetup = user => {
  return dispatch => {
    dispatch(requestToken())

    return user.getToken(true)
      .then(token => dispatch(receiveToken({user, token})))
  }
}
