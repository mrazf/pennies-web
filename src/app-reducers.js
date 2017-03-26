import { combineReducers } from 'redux'
import moment from 'moment'
import categories from './categories/reducers'

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

const transactions = (state = { entries: [], requested: false, received: false }, action) => {
  switch (action.type) {
    case 'REQUEST_TRANSACTIONS': return { ...state, requested: true }
    case 'RECEIVE_TRANSACTIONS': return { ...state, received: true, entries: action.transactions }
    default: return state
  }
}

const selectedMonth = (state = { number: moment().month() }, action) => {
  switch (action.type) {
    case 'CHANGE_MONTH': return { ...state, number: action.monthNumber }
    default: return state
  }
}

const pennies = combineReducers({ user, token, transactions, categories, selectedMonth })

export default pennies
