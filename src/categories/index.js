import React, { Component } from 'react'
import firebase from 'firebase'

const apiHost = __API_HOST__

export default class Dashboard extends Component {
  constructor (props) {
    super(props)

    this.state = { categories: [] }

    this.getCategories = this.getCategories.bind(this)
  }

  getCategories (token) {
    const headers = { 'Authorization': `Bearer: ${token}` }

    window.fetch(`${apiHost}/categories`, { headers })
      .then(resp => resp.json())
      .then(json => this.setState({ categories: json.categories }))
      .catch(console.log)
  }

  componentDidMount () {
    firebase.auth().currentUser.getToken(true)
      .then(this.getCategories)
  }

  render () {
    return (
      <div className='categories'>
        { this.state.categories }
      </div>
    )
  }
}
