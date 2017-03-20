import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import firebase from 'firebase'

import pennies from './redux/reducers'
import App from './app'
import Home from './home'
import Dashboard from './dashboard'
import DashboardHome from './dashboard/home'
import DashboardContent from './dashboard/content'
import Categories from './categories/categories-container'

firebase.initializeApp({
  apiKey: 'AIzaSyCUc586MZvUba-no3aB-tt2mr7CLROVle8',
  authDomain: 'pennies-9cba3.firebaseapp.com',
  databaseURL: 'https://pennies-9cba3.firebaseio.com',
  storageBucket: 'pennies-9cba3.appspot.com',
  messagingSenderId: '270478801405'
})

render((
  <Provider store={createStore(pennies)}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route component={Dashboard}>
          <Route path='/dashboard/home' component={DashboardHome} />
          <Route path='/dashboard/transactions' component={DashboardContent} />
          <Route path='/dashboard/transactions/months/:month' component={DashboardContent} />
          <Route path='/dashboard/categories' component={Categories} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
