import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import 'bootstrap'

import './firebase'
import configureStore from './app-store'
import App from './app'
import Home from './home'
import Auth from './user/auth'
import Transactions from './transactions/transactions'
import Categories from './categories/categories'
import Admin from './admin/admin'

render((
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route component={Auth}>
          <Route path='/admin' component={Admin} />
          <Route path='/dashboard/transactions' component={Transactions} />
          <Route path='/dashboard/categories' component={Categories} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
