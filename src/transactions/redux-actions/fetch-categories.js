import database from '../../persistence'

const requestCategories = () => {
  return { type: 'REQUEST_CATEGORIES' }
}

const receiveCategories = categories => {
  console.log('receiveCategories', categories)
  return { type: 'RECEIVE_CATEGORIES', categories }
}

const fetchCategories = uid => {
  return dispatch => {
    dispatch(requestCategories())

    console.log('uid', uid)

    return database.ref(`/users/${uid}/categories`).once('value')
      .then(snapshot => dispatch(receiveCategories(snapshot.val())))
  }
}

export default fetchCategories
