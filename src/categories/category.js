import React, { Component } from 'react'

export default class Category extends Component {
  render () {
    return (
      <div className='card' style={{width: '20rem'}}>
        <div className='card-block'>
          <h4 className='card-title'>{this.props.title}</h4>
        </div>
        <ol>
          {
            this.props.transactions.map(t => {
              return <li key={t.id}>{t.id}</li>
            })
          }
        </ol>
      </div>
    )
  }
}
