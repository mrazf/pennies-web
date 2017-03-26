import React, { Component } from 'react'
import { connect } from 'react-redux'

class Transaction extends Component {
  constructor (props) {
    super(props)

    const { transactions, params: id } = props

    this.state = { transaction: transactions.find(t => t.id === id) }
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          {this.state.transaction}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { transactions: state.transactions.entries }
}

export default connect(mapStateToProps)(Transaction)
