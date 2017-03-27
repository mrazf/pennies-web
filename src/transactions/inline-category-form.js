import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Control } from 'react-redux-form'
import './inline-category-form.scss'

class CategorySelect extends Component {
  render () {
    return (
      <Control.select model='user.faveColor' className='form-control form-control-sm'>
        <option value='red'>red</option>
        <option value='green'>green</option>
        <option value='blue'>blue</option>
      </Control.select>
    )
  }
}

class CategoryForm extends Component {
  render () {
    return (
      <div className='categoryForm form-group form-inline'>
        Uncategorized
        {
          this.props.categories.length > 0 ? <CategorySelect /> : <Control.text />
        }
        <button type='button' className='btn btn-sm btn-outline-primary'>New Category</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { categories: state.categories.entries }
}

export default connect(mapStateToProps)(CategoryForm)
