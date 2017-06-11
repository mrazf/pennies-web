import { combineReducers } from 'redux'
import categories from './transactions/redux-reducers/categories'
import user from './user/redux-reducers'
import exporter from './exporter/reducers'
import transactions from './transactions/redux-reducers'

const pennies = combineReducers({ user, transactions, categories, exporter })

export default pennies
