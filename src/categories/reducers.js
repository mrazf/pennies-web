const mangle = (transactions) => {
  transactions.map(t => t.metadata || 'Uncategorized')

  return [ 'Uncategorized' ]
}

const categories = (state = { entries: [] }, action) => {
  switch (action.type) {
    case 'TRANSACTIONS_TO_CATEGOREIES': return { ...state, entries: mangle(action.transactions) }
    default: return state
  }
}

export default categories
