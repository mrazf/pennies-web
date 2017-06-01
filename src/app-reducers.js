import { combineReducers } from 'redux'
import * as R from 'ramda'
import moment from 'moment'
import categories from './categories/reducers'
import exporter from './exporter/reducers'

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

const transactions = (state = { allIds: [], byId: [], updatingIds: [], requested: false, received: false }, action) => {
  switch (action.type) {
    case 'REQUEST_TRANSACTIONS':
      return { ...state, requested: true }
    case 'RECEIVE_TRANSACTIONS':
      const allIds = action.transactions.map(t => t.id)
      const byId = action.transactions.reduce((acc, t) => {
        acc[t.id] = t

        return acc
      }, {})
      return { ...state, received: true, byId, allIds }
    case 'CATEGORY_UPDATE_REQUEST':
      return { ...state, updatingIds: [ ...state.updatingIds, action.transaction.id ] }
    case 'CATEGORY_UPDATE_SUCCESS':
      const updatedId = action.transaction.id
      const updatedById = { ...state.byId, [updatedId]: action.transaction }
      const updatingIds = R.without(updatedId, state.updatingIds)

      return { ...state, byId: updatedById, updatingIds }
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
