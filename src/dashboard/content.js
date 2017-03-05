import React, { Component } from 'react'

export default class Content extends Component {
  render () {
    return (
      <section className="section">
        <div className='container'>
          <div className='column'>
            <h1 className='title'>Your Categories</h1>
          </div>
        </div>
        <div className='container is-fluid'>
          <div className='columns'>
            <div className='column is-2'>
              <aside className='menu'>
                <ul className='menu-list'>
                  <li className='subtitle is-5'><a>Categories</a></li>
                  <li className='subtitle is-5'><a>Transactions</a></li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
