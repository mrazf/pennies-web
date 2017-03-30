const categories = (state = { byId: [] }, action) => {
  switch (action.type) {
    case 'REQUEST_CATEGORIES': return state
    case 'RECEIVE_CATEGORIES': return { ...state, byId: action.categories }
    default: return state
  }
}

export default categories
