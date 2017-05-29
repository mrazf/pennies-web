import React, { Component } from 'react'
import { Creatable } from 'react-select'
import 'react-select/dist/react-select.css'

class Categorize extends Component {
  createableOptions () {
    return {
      onNewOptionClick: ({ label, labelKey, valueKey }) => {
        this.props.newCategory(label)
      },
      promptTextCreator: option => `Create category "${option}"`
    }
  }

  render () {
    return (
      <Creatable
        name='form-field-name'
        clearable={false}
        value={this.props.value}
        isLoading={this.props.loading}
        disabled={this.props.disabled}
        options={this.props.options}
        onChange={this.props.onChange}
        onBlur={this.props.toggleExpansion}
        onFocus={this.props.toggleExpansion}
        {...this.createableOptions()}
      />
    )
  }
}

export default Categorize
