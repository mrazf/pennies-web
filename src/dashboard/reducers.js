const categories = (state = { entries: [] }, action) => {
  switch (action.type) {
    case 'REQUEST_CATEGORIES': return state
    case 'RECEIVE_CATEGORIES': return { ...state, entries: action.categories }
    default: return state
  }
}

export default categories
