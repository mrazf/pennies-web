import React, { Component } from 'react'
import { Form, Control } from 'react-redux-form'

class CategoryForm extends Component {
  func (user) {
    console.log('poop', user)
  }

  render () {
    return (
      <Form model='form.user' onSubmit={user => this.func(user)}>
        <div className='form-group form-inline'>
          <Control.text model='simple.firstName' placeholder='First Name' type='text' className='form-control' />
          <button type='button' className='btn btn-outline-primary'>New Category</button>
        </div>
      </Form>
    )
  }
}

export default CategoryForm
