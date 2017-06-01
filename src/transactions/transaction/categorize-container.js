import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Creatable } from 'react-select'

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

    this.onChange = this.onChange.bind(this)
    this.newCategory = this.newCategory.bind(this)
  }

  onChange (chosen) {
    this.setState({ ...this.state })

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

  createableOptions () {
    return {
      onNewOptionClick: ({ label, labelKey, valueKey }) => {
        this.newCategory(label)
      },
      promptTextCreator: option => `Create category "${option}"`
    }
  }

  render () {
    const value = this.props.categoryId || NOT_SET.value

    return (
      <Creatable
        name='form-field-name'
        clearable={false}
        value={value}
        isLoading={this.props.disabled}
        disabled={this.props.disabled}
        options={this.props.categories}
        onChange={this.onChange}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        {...this.createableOptions()}
      />
    )
  }
}

const mapStateToProps = state => {
  return { categories: categoriesToOptions(state.categories.byId) }
}

export default connect(mapStateToProps)(CategorizeContainer)
