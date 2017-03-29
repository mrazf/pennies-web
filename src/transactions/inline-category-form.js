import React, { Component } from 'react'
import Uncategorized from './uncategorized-form'
import './inline-category-form.scss'

class Category extends Component {
  render () {
    return (
      <div className='categoryForm form-group form-inline'>
        { this.props.category ? this.props.category : <Uncategorized /> }
      </div>
    )
  }
}

export default Category
