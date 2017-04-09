import React, { Component } from 'react'
import classnames from 'classnames'
import './hamburger-button.scss'

export default class HamburgerButton extends Component {
  render () {
    const classes = classnames('hamburger', { 'is-active': this.props.open })

    return (
      <button onClick={this.props.toggle} className={classes} type='button'>
        <span className='hamburger-box'>
          <span className='hamburger-inner' />
        </span>
      </button>
    )
  }
}
