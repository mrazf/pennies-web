import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap'

import './firebase'
import configureStore from './app-store'
import App from './app'

render((
  <Provider store={configureStore()}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('app'))
