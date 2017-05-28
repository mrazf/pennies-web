const categories = (state = { byId: [], newRequest: { slug: '', name: '' } }, action) => {
  switch (action.type) {
    case 'RECEIVE_USER_DATA': return { ...state, byId: action.data.categories }
    case 'ADD_NEW_CATEGORY_REQUEST': return { ...state, newRequest: { slug: action.slug, name: action.name } }
    case 'ADD_NEW_CATEGORY_SUCCESS':
      const byId = { ...state.byId, [state.newRequest.slug]: state.newRequest.name }
      return { ...state, byId }
    default: return state
  }
}

export default categories
