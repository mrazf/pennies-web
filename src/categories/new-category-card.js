import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewCategory } from './actions'

class NewCategoryCard extends Component {
  constructor (props) {
    super(props)

    this.state = { value: 'Category name' }

    this.handleChange = event => this.setState({ value: event.target.value })
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit (event) {
    event.preventDefault()

    this.props.onSubmit(this.state.value)
  }

  render () {
    return (
      <div className='card'>
        <h4 className='card-header text-muted'>New Category</h4>
        <div className='card-block'>
          <p className='card-text'>Add a new category, assign some transactions to it and start tracking.</p>
          <form className='form-inline' onSubmit={this.onSubmit}>
            <input
              type='text'
              className='form-control form-control-sm'
              value={this.state.value}
              onChange={this.handleChange} />
            <button className='btn btn-sm btn-primary mx-sm-2'>Add</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { onSubmit: newCategoryName => dispatch(addNewCategory(newCategoryName)) }
}

export default connect(null, mapDispatchToProps)(NewCategoryCard)
