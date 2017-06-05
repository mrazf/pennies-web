import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import './firebase'
import configureStore from './store'
import App from './app'
import Home from './home'
import Dashboard from './dashboard/dashboard'
import DashboardHome from './dashboard/home/home'
import Transactions from './transactions/transactions'
import Categories from './categories/categories'

render((
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route component={Dashboard}>
          <Route path='/dashboard' component={DashboardHome} />
          <Route path='/dashboard/transactions' component={Transactions} />
          <Route path='/dashboard/categories' component={Categories} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
