import React from 'react'
import { shallow } from 'enzyme'
import { TransactionContainer } from './transaction-container'

describe('Transaction Container', () => {
  it('is disabled if it\'s id is in the in flight requests', () => {
    const container = shallow(<TransactionContainer />)
    const props = container.find('TransactionComponent').props()

    expect(props.loading).toBe(true)
  })
})
