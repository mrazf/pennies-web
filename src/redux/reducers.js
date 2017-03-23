import { combineReducers } from 'redux'

const user = (state = { data: null }, action) => {
  switch (action.type) {
    case 'ADD_USER': return { ...state, data: action.user }
    case 'NO_USER': return { ...state, data: action.user }
    default: return state
  }
}

const token = (state = { value: null, requested: false, received: false }, action) => {
  switch (action.type) {
    case 'REQUEST_TOKEN':
      return { ...state, requested: true }
    case 'RECEIVE_TOKEN':
      return { ...state, received: true, value: action.token }
    default: return state
  }
}

const pennies = combineReducers({ user, token })

export default pennies
