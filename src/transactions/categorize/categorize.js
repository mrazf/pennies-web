import React, { Component } from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

class Categorize extends Component {
  render () {
    return (
      <Select
        name="form-field-name"
        value="one"
        options={options}
      />
    )
  }
}

export default Categorize
