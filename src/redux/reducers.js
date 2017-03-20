import { combineReducers } from 'redux'

const user = (state = {}, action) => {
  switch (action.type) {
    case 'USER': return { user: action.user }
    case 'NO_USER': return { user: action.user }
    default: return state
  }
}

const pennies = combineReducers({ user })

export default pennies
