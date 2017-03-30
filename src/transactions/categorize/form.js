import React, { Component } from 'react'
import { connect } from 'react-redux'
import './form.scss'

class Uncategorized extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: 'Uncategorized',
      value: null,
      updateDisabled: true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const value = e.target.value
    const name = this.props.categories[value]
    const updateDisabled = name === null

    this.setState({name, value, updateDisabled})
  }

  handleSubmit (e) {
    e.preventDefault()

    this.props.updateCategory(this.state.value)
  }

  render () {
    const ids = Object.keys(this.props.categories)

    return (
      <form onSubmit={this.handleSubmit} className='categorizeForm form-inline'>
        <div className='categorySelect'>
          <select defaultValue='Uncategorized' onChange={this.handleChange} className='form-control form-control-sm'>
            <option className='form-text' disabled>Uncategorized</option>
            {
              ids.map((id, i) => {
                return <option className='form-text' value={id} key={id}>{this.props.categories[id]}</option>
              })
            }
          </select>
          <button type='submit' className='btn btn-sm btn-outline-success' disabled={this.state.updateDisabled}>
            <strong>
              UPDATE
            </strong>
          </button>
        </div>
        <button type='submit' className='btn btn-sm btn-outline-primary'>
          <strong>NEW CATEGORY</strong>
        </button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return { categories: state.categories.entries }
}

export default connect(mapStateToProps)(Uncategorized)
