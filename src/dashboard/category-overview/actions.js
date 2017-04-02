import { database } from '../../index'

const categoryDeleteRequest = () => {
  return { type: 'CATEGORY_DELETE_REQUEST' }
}

const categoryDeleteSuccess = () => {
  return { type: 'CATEGORY_DELETE_SUCCESS' }
}

export const deleteCategory = slug => {
  return (dispatch, getState) => {
    dispatch(categoryDeleteRequest())

    const uid = getState().user.data.uid

    return database.ref(`/users/${uid}/categories/${slug}`).remove()
      .then(() => dispatch(categoryDeleteSuccess()))
  }
}
