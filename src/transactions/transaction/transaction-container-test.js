import React from 'react'
import { shallow } from 'enzyme'
import { TransactionContainer } from './transaction-container'

describe('Transaction Container', () => {
  it('has a disabled category if it is updating', () => {
    const transaction = { categoryId: 'drinks-out' }

    const container = shallow(<TransactionContainer transaction={transaction} updating />)
    const props = container.find('TransactionComponent').props().categorizeContainer.props

    expect(props.disabled).toBe(true)
  })
})
