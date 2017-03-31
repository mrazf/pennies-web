import React, { Component } from 'react'

export default class Category extends Component {
  render () {
    return (
      <div className='card'>
        <h4 className='card-header'>{this.props.title}</h4>
        <div className='card-block' style={{'textOverflow': 'ellipsis'}}>
          <ol>
            {
              this.props.transactions.map(t => {
                return <li key={t.id}>{t.id}</li>
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}
