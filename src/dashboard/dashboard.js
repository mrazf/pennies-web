import React, { Component } from 'react'
import { connect } from 'react-redux'
import firebase from 'firebase'
import { userSetup, noUser } from './dashboard-actions'
import Banner from './banner/banner'
import Picker from './time-range-picker/picker'
import ViewPicker from './view-picker'

class Dashboard extends Component {
  componentDidMount () {
    firebase.auth().onAuthStateChanged(userObj => {
      const { user, userSetupDiff, loggedOutUser } = this.props

      if (userObj === null) return loggedOutUser()
      if (userObj !== user) return userSetupDiff(userObj)
    })
  }

  render () {
    return (
      <div className='dashboard'>
        <Banner />
        <ViewPicker />
        <Picker />
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.data,
    transactions: state.transactions,
    selectedMonth: state.selectedMonth.number
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userSetupDiff: userObj => dispatch(userSetup(userObj)),
    loggedOutUser: () => dispatch(noUser(null))
  }
}

const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default DashboardContainer
