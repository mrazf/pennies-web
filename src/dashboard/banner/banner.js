import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'

import './banner.scss'

const home = { title: 'Dashboard Home', link: '/dashboard' }

class Banner extends Component {
  render () {
    const path = this.props.router.location.pathname.split('/').filter((p) => p)
    const displayPath = path.map(p => p.charAt(0).toUpperCase() + p.slice(1))

    return (
      <div className='banner'>
        <div className='container'>
          <p className='lead'>Going well this month</p>
          <ol className='breadcrumb'>
            {
              [home].map((b, i) => {
                return (
                  <li className='breadcrumb-item' key={i}>
                    <Link to={b.link}>{b.title}</Link>
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default withRouter(Banner)
