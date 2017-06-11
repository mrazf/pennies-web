const initialState = {
  uid: null,
  displayName: null,
  token: null,
  received: false,
  requested: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TOKEN':
      return { ...state, requested: true }
    case 'RECEIVE_TOKEN':
      return {
        ...state,
        received: true,
        token: action.token,
        uid: action.user.uid,
        displayName: action.user.displayName
      }
    default: return state
  }
}

export default user
