import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import firebase from 'firebase'

import configureStore from './store'
import App from './app'
import Home from './home'
import Dashboard from './dashboard/dashboard'
import DashboardHome from './dashboard/home/home'
import Transactions from './transactions/transactions'
import Transaction from './transactions/transaction'
import Categories from './categories/categories'

firebase.initializeApp({
  apiKey: 'AIzaSyCUc586MZvUba-no3aB-tt2mr7CLROVle8',
  authDomain: 'pennies-9cba3.firebaseapp.com',
  databaseURL: 'https://pennies-9cba3.firebaseio.com',
  storageBucket: 'pennies-9cba3.appspot.com',
  messagingSenderId: '270478801405'
})

render((
  <Provider store={configureStore()}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route component={Dashboard}>
          <Route path='/dashboard' component={DashboardHome} />
          <Route path='/dashboard/transactions' component={Transactions} />
          <Route path='/dashboard/transactions/:id' component={Transaction} />
          <Route path='/dashboard/categories' component={Categories} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
