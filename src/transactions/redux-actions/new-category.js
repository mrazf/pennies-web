import slugify from 'slugify'
import database from '../../persistence'

const addNewCategoryRequest = category => {
  return { type: 'ADD_NEW_CATEGORY_REQUEST', ...category }
}

const categoryUpdateSuccess = () => {
  return { type: 'ADD_NEW_CATEGORY_SUCCESS' }
}

export const addNewCategory = name => {
  return (dispatch, getState) => {
    const slug = slugify(name.toLowerCase())

    dispatch(addNewCategoryRequest({ slug, name }))

    const uid = getState().user.uid
    const existingCategories = getState().categories.byId
    const categories = { ...existingCategories, [slug]: name }

    return database.ref(`/users/${uid}/categories`).set(categories)
      .then(() => dispatch(categoryUpdateSuccess()))
  }
}

export default addNewCategory
