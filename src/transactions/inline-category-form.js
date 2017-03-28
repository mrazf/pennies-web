import React, { Component } from 'react'
import { connect } from 'react-redux'
import './inline-category-form.scss'

class Uncategorized extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: 'Select a category'
    }
  }

  render () {
    return (
      <form className='form-inline'>
        <select value={this.state.value}>
          <option disabled>{ this.state.value }</option>
          {
            this.props.categories.map((c, i) => {
              return <option className='form-text' value={c} key={i}>{c}</option>
            })
          }
        </select>
        <button type='submit' className='btn btn-sm btn-outline-primary'>New Category</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return { categories: state.categories.entries }
}

const UncategorizedContainer = connect(mapStateToProps)(Uncategorized)

class Category extends Component {
  render () {
    return (
      <div className='categoryForm form-group form-inline'>
        { this.props.category ? this.props.category : <UncategorizedContainer /> }
      </div>
    )
  }
}

export default Category
