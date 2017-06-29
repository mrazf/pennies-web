import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import database from '../persistence'

const apiHost = __API_HOST__

class Admin extends Component {
  constructor (props) {
    super(props)

    this.state = { webhooks: [], accountIds: [] }

    database.ref('admins').once('value')
      .then(snapshot => {
        const admins = snapshot.val()

        if (!admins.includes(this.props.user.uid)) {
          return this.props.router.replace('/dashboard/transactions')
        }
      })

    this.getWebhooks = this.getWebhooks.bind(this)
    this.newHook = this.newHook.bind(this)
  }

  getWebhooks () {
    const headers = { 'Authorization': `Bearer: ${this.props.user.token}` }

    window.fetch(`${apiHost}/monzo-webhooks`, { headers })
      .then(response => response.json())
      .then(({ webhooks }) => {
        this.setState({ webhooks })
      })
  }

  newHook () {
    const headers = { 'Authorization': `Bearer: ${this.props.user.token}` }
    const method = 'POST'

    window.fetch(`${apiHost}/monzo-webhooks`, { headers, method })
      .then(response => response.json())
      .then(() => {
        this.getWebhooks()
      })
  }

  componentDidMount () {
    this.getWebhooks()
  }

  render () {
    return (
      <div className='admin container'>
        <div className='row'>
          <div className='col'>
            <p className='lead'>Webhooks</p>
            <div>
              <label>New Hook</label>
              <button className='btn btn-primary' onClick={this.newHook}>Submit</button>
            </div>
            {
              this.state.webhooks.map(webhook => <div>{JSON.stringify(webhook)}</div>)
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

export default connect(mapStateToProps)(withRouter(Admin))
