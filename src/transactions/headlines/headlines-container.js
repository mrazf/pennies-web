import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeadlinesComponent from './headlines-component'
import refreshMonth from './redux-actions'

class HeadlinesContainer extends Component {
  refreshThisMonth () {
    return () => this.props.refreshMonth(this.props.selectedMonth)
  }

  render () {
    return <HeadlinesComponent refresh={this.refreshThisMonth()} />
  }
}

const mapDispatchToProps = dispatch => {
  return { refreshMonth: monthNumber => dispatch(refreshMonth(monthNumber)) }
}

export default connect(null, mapDispatchToProps)(HeadlinesContainer)
