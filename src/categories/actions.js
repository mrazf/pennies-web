import slugify from 'slugify'
import { database } from '../index'

export const addNewCategoryRequest = () => {
  return { type: 'ADD_NEW_CATEGORY_REQUEST' }
}

export const categoryUpdateSuccess = transaction => {
  return { type: 'ADD_NEW_CATEGORY_SUCCESS', transaction }
}

export const addNewCategory = newCategoryName => {
  return (dispatch, getState) => {
    dispatch(addNewCategoryRequest)

    const uid = getState().user.data.uid
    const existingCategories = getState().categories.byId
    const slug = slugify(newCategoryName.toLowerCase())
    const categories = { ...existingCategories, [slug]: newCategoryName }

    return database.ref(`/users/${uid}/categories`).set(categories)
      .then(() => dispatch(categoryUpdateSuccess))
  }
}
