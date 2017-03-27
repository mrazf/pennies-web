import React, { Component } from 'react'
import { Control } from 'react-redux-form'
import './inline-category-form.scss'

class CategoryForm extends Component {
  render () {
    return (
      <div className='categoryForm form-group form-inline'>
        Uncategorized
        <Control.select model='user.faveColor' className='form-control form-control-sm'>
          <option value='red'>red</option>
          <option value='green'>green</option>
          <option value='blue'>blue</option>
        </Control.select>
        <button type='button' className='btn btn-sm btn-outline-primary'>New Category</button>
      </div>
    )
  }
}

export default CategoryForm
