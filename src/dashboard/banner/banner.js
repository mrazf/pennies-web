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
              paths.map((p, i) => {
                const bannerPath = bannerPaths[p]
                return (
                  <li className='breadcrumb-item' key={i}>
                    <Link to={bannerPath.link}>{bannerPath.title}</Link>
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
