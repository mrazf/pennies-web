import React, { Component } from 'react'
import { connect } from 'react-redux'
import Categorize from './categorize'

const NOT_SET = { value: 'not-set', label: 'Not Set' }

const categoriesToOptions = categories => {
  const options = Object.keys(categories).map(category => {
    return { value: category, label: categories[category] }
  })

  return [ NOT_SET, ...options ]
}

class CategorizeContainer extends Component {
  constructor (props) {
    super(props)

    const value = this.props.categoryId || NOT_SET.value
    const loading = false
    const disabled = false

    this.state = { value, loading, disabled }

    this.onChange = this.onChange.bind(this)
    this.newCategory = this.newCategory.bind(this)
  }

  onChange (chosen) {
    this.setState({ ...this.state, disabled: true, loading: true })

    this.props.updateCategory(chosen.value)
  }

  newCategory (params) {
    return new Promise((resolve, reject) => {
      this.setState({ ...this.state, disabled: true, loading: true })

      console.log('newCategory', params)
      window.setTimeout(() => this.setState({ value: 'rent', disabled: false, loading: false }), 2000)

      resolve()
    })
  }

  render () {
    return (
      <Categorize
        value={this.state.value}
        options={this.props.categories}
        loading={this.state.loading}
        disabled={this.state.disabled}
        onChange={this.onChange}
        newCategory={this.newCategory}
        toggleExpansion={this.props.toggleExpansion}
      />
    )
  }
}

const mapStateToProps = state => {
  return { categories: categoriesToOptions(state.categories.byId) }
}

export default connect(mapStateToProps)(CategorizeContainer)
