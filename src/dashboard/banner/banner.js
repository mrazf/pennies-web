import React, { Component } from 'react'
import { Link, withRouter } from 'react-router'

import './banner.scss'

const bannerPaths = {
  dashboard: { title: 'Dashboard Home', link: '/dashboard' },
  transactions: { title: 'Transactions', link: '/dashboard/transactions' },
  categories: { title: 'Categories', link: '/dashboard/categories' }
}

class Banner extends Component {
  render () {
    const paths = this.props.router.location.pathname.split('/').filter((p) => p)

    return (
      <div className='banner'>
        <div className='container'>
          <p className='lead'>Going well this month</p>
          <ol className='breadcrumb'>
            {
              [bannerPaths.dashboard, bannerPaths.transactions].map((p, i) => {
                return (
                  <li className='breadcrumb-item' key={i}>
                    <Link to={p.link}>{p.title}</Link>
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
