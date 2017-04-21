import React, { Component } from 'react'
import YearViewComponent from './year-view-component'

class YearView extends Component {
  constructor (props) {
    super(props)

    this.recreate = this.recreate.bind(this)
  }

  recreate () {
    console.log('pop')
  }

  render () {
    return <YearViewComponent {...this.props} recreate={this.recreate} />
  }
}

export default YearView
