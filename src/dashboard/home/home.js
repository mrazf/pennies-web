import React, { Component } from 'react'

import Card from './card'

const dashboardItems = [
  {
    title: 'Categories',
    description: 'Group your transactions and we\'ll keep categorizing them to see where your monies going',
    links: [
      { title: 'By Month', link: '/dashboard/categories' },
      { title: 'By Day', link: '/dashboard/categories/by-day' },
      { title: 'By Year', link: '/dashboard/categories/by-year' }
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
  }
]

export default class Home extends Component {
  render () {
    return (
      <div className='dashboard-home'>
        <div className='container'>
          <div className='row'>
            {
              dashboardItems.map(i => {
                return (
                  <div className='col' key={i.title}>
                    <Card data={i} />
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
