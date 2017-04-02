import React, { Component } from 'react'
import { connect } from 'react-redux'
import CategoryOverview from './category-overview'
import './home.scss'

class Home extends Component {
  render () {
    return (
      <div className='dashboard-home'>
        <div className='container-fluid'>
          <div className='row'>
            {
              this.props.categories.map(c => {
                return (
                  <div className='col-xl-3'>
                    <CategoryOverview category={c} key={c} />
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

const mapStateToProps = state => {
  const categoriesById = Object.keys(state.categories.byId)
  return { categories: categoriesById.map(id => state.categories.byId[id]) }
}

export default connect(mapStateToProps)(Home)
