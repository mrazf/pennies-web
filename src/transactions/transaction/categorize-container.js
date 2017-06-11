import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Creatable } from 'react-select'
import addNewCategory from '../redux-actions/new-category'

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
  }

  onChange (chosen) {
    this.setState({ ...this.state })

    this.props.updateCategory(chosen.value)
  }

  createableOptions () {
    return {
      onNewOptionClick: ({ label, labelKey, valueKey }) => {
        this.props.addNewCategory(label)
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

const mapDispatchToProps = dispatch => {
  return { addNewCategory: label => dispatch(addNewCategory(label)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorizeContainer)
