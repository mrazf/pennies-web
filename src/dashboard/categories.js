import React, { Component } from 'react'
import firebase from 'firebase'

import './category.scss'

const a = [1,2,3,4,5,6,7,8]

export default class Categories extends Component {
  constructor (props) {
    super(props)

    this.state = { categories: [] }
  }

  componentDidMount () {
    const userId = firebase.auth().currentUser.uid

    console.log(userId)

    firebase.database().ref(`/users/${userId}/categories`).once('value')    
      .then(categoriesSnapshot => {
        const categories = categoriesSnapshot.val()
        console.log(categories)
        this.setState({ categories })
      })
  }

  render () {
    console.log(this.state)
    return (
      <div className='row'>
        {
          this.state.categories.map(c => {
            return (
              <div className='col-2'>
                <div className="card" key={c}>
                  <div className="card-block">
                    <h5 className="card-title">{c}</h5>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}
