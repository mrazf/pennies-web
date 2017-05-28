import React, { Component } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

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

  render () {
    return (
      <Select
        name='form-field-name'
        value={this.state.value}
        options={categoriesToOptions(this.props.categories)}
        onChange={this.onChange}
        onBlur={this.props.toggleExpansion}
        onFocus={this.props.toggleExpansion}
      />
    )
  }
}

const mapStateToProps = state => {
  return { categories: state.categories.byId }
}

export default connect(mapStateToProps)(Categorize)
