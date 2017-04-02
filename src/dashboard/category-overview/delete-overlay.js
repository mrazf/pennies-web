import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteCategory } from './actions'

class DeleteOverlay extends Component {
  constructor (props) {
    super(props)

    this.state = { category: props.category }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()

    console.log(this.state)

    this.props.deleteThisCategory(this.state.category.slug)
  }

  render () {
    const { category } = this.props

    return (
      <div className='delete-overlay card'>
        <div className='card-header'>
          <h5 className='title'>{category.name}</h5>
        </div>
        <div className='card-block'>
          <p>Delete this category and change any '{category.name}' to uncategorized?</p>
          <form onSubmit={this.handleSubmit}>
            <input className='form-control' placeholder={`Type '${category.name}' exactly to delete`} />
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { deleteThisCategory: slug => dispatch(deleteCategory(slug)) }
}

export default connect(null, mapDispatchToProps)(DeleteOverlay)
