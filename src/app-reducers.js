import { combineReducers } from 'redux'
import moment from 'moment'
import categories from './categories/reducers'
import exporter from './exporter/reducers'
import transactions from './transactions/redux-reducers'

const initialUserState = {
  data: { apiKey: null }
}

const user = (state = initialUserState, action) => {
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

const selectedMonth = (state = { number: moment().month() }, action) => {
  switch (action.type) {
    case 'CHANGE_MONTH': return { ...state, number: action.monthNumber }
    default: return state
  }
}

const pennies = combineReducers({ user, token, transactions, categories, selectedMonth, exporter })

export default pennies
