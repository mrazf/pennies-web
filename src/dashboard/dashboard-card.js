import React, { Component } from 'react'
import { Link } from 'react-router'

export default class DashboardCard extends Component {
  render () {
    return (
      <div className='card' style={{width: '20rem'}}>
        <img className='card-img-top' src='...' alt='Card image cap' />
        <div className='card-block'>
          <h4 className='card-title'>{this.props.data.title}</h4>
          <p className='card-text'>{this.props.data.description}</p>
        </div>
        <ul className='list-group list-group-flush'>
          {
            this.props.data.links.map((l, i) => {
              return <Link to={l.link} className='list-group-item' key={i}>{l.title}</Link>
            })
          }
        </ul>
      </div>
    )
  }
}
