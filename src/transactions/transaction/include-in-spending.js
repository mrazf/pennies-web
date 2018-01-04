import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeIncludeInSpending } from './include-in-spending-actions'

class IncludeInSpendingContainer extends Component {
  constructor (props) {
    super(props)

    const checked = props.transaction.includeInSpending === undefined ? true : props.transaction.includeInSpending
    this.state = { checked, loading: false }

    this.onChange = this.onChange.bind(this)
  }

  onChange () {
    return includeInSpending => {
      this.setState({ ...this.state, loading: true })

      return this.props.changeIncludeInSpending(this.props.transaction)
    }
  }

  render () {
    return this.state.loading ? <span>Loading...</span> : <input
      type='checkbox'
      checked={this.state.checked}
      onChange={this.onChange()}
  />
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeIncludeInSpending: (transaction) => {
      dispatch(changeIncludeInSpending(transaction))
    }
  }
}

export default connect(null, mapDispatchToProps)(IncludeInSpendingContainer)
