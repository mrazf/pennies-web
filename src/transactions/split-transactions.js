import * as R from 'ramda'

const splitTransactions = (transactions, chosenTransactionIndex) => {
  const shouldSplit = chosenTransactionIndex !== null
  const split = shouldSplit ? R.splitAt(chosenTransactionIndex + 1, transactions) : transactions

  const top = shouldSplit ? split[0] : transactions
  const bottom = shouldSplit ? split[1] : null

  return { top, bottom }
}

export default splitTransactions
