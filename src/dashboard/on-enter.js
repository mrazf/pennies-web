import firebase from 'firebase'
import moment from 'moment'

const move = (pathName, replaceState, monthName) => {
  if (pathName === '/dashboard') replaceState(`/dashboard/${monthName}/transactions`)
}

export default (nextState, replaceState) => {
  const monthIndex = moment().get('month')
  const monthName = moment.months()[monthIndex].toLowerCase()

  if (firebase.auth().currentUser) return move(nextState.location.pathname, replaceState, monthName)

  firebase.auth().onAuthStateChanged(() => {
    move(nextState.location.pathname, replaceState, monthName)
  })
}
