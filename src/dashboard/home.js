import React, { Component } from 'react'

import DashboardCard from './dashboard-card'

const dashboardItems = [
  {
    title: 'Categories',
    description: 'Group your transactions and we\'ll keep categorizing them to see where your monies going',
    links: [
      { title: 'By Month', link: '/dashboard/home/categories' },
      { title: 'By Day', link: '/dashboard/home/categories/by-day' },
      { title: 'By Year', link: '/dashboard/home/categories/by-year' }
    ]
  },
  {
    title: 'Transactions',
    description: 'Get a full breakdown of your Monzo spending and update any categories or tags',
    links: [
      { title: 'By Month', link: '/dashboard/transactions' },
      { title: 'By Day', link: '/dashboard/home/transactions/by-day' },
      { title: 'By Year', link: '/dashboard/home/transactions/by-year' }
    ]
  },
  {
    title: 'Tags',
    description: 'A transaction can be in one category but have multiple tags, view them here',
    links: [
      { title: 'By Month', link: '/dashboard/tags' },
      { title: 'By Day', link: '/dashboard/tags/by-day' },
      { title: 'By Year', link: '/dashboard/tags/by-year' }
    ]
  }
]

export default class Dashboard extends Component {
  render () {
    return (
      <div className='dashboard-home'>
        <div className='container'>
          <div className='row'>
            {
              dashboardItems.map(i => {
                return (
                  <div className='col' key={i.title}>
                    <DashboardCard data={i} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
