import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Creatable } from 'react-select'
import 'react-select/dist/react-select.css'
import { addNewCategory } from '../../categories/actions'

const notSet = { value: 'not-set', label: 'Not Set' }

const categoriesToOptions = categories => {
  const options = Object.keys(categories).map(category => {
    return { value: category, label: categories[category] }
  })

  return [ notSet, ...options ]
}

class Categorize extends Component {
  constructor (props) {
    super(props)

    const value = this.props.categoryId || notSet.value

    this.state = { value }

    this.onChange = chosen => this.setState({ value: chosen.value })
  }

  createableOptions () {
    return {
      onNewOptionClick: ({ label, labelKey, valueKey }) => {
        console.log('im being created')
        this.props.addNewCategory(label)
        return { value: 'pop', label }
      },
      promptTextCreator: option => `Create category "${option}"`
    }
  }

  render () {
    return (
      <Creatable
        name='form-field-name'
        value={this.state.value}
        isLoading={this.state.loading}
        options={categoriesToOptions(this.props.categories)}
        onChange={this.onChange}
        onBlur={this.props.toggleExpansion}
        onFocus={this.props.toggleExpansion}
        {...this.createableOptions()}
      />
    )
  }
}

const mapStateToProps = state => {
  return { categories: state.categories.byId }
}

const mapDispatchToProps = dispatch => {
  return { addNewCategory: name => dispatch(addNewCategory(name)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categorize)
