import * as R from 'ramda'

const initialState = {
  allIds: [],
  byId: [],
  updatingIds: [],
  requested: false,
  received: false,
  selectedMonth: 0
}

const transactions = (state = initialState, action) => {
  switch (action.type) {
    case 'TRANSACTIONS_MONTH_CHANGE':
      return { ...state, selectedMonth: action.month }
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

export default transactions
