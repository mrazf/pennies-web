import { transactions } from '../../stubs/transactions.json'
import splitTransactions from './split-transactions'

describe('Split transactions', () => {
  it('correctly divides into top bottom with no selected transaction', () => {
    const { top, bottom } = splitTransactions(transactions, null)

    expect(top).toEqual(transactions)
    expect(bottom).toEqual(null)
  })

  it('correctly divides into top bottom with a selected transaction', () => {
    const { top, bottom } = splitTransactions(transactions, 2)

    expect(top.length).toEqual(3)
    expect(top[2].id).toEqual('tx_00009JzzOa7pz4kI3HI4x7')

    expect(bottom.length).toEqual(6)
    expect(bottom[0].id).toEqual('tx_00009JzzlGRdK407fpMk0f')
  })
})
