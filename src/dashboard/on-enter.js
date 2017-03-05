import moment from 'moment'

export default (nextState, replaceState) => {
  const monthIndex = moment().get('month')
  const monthName = moment.months()[monthIndex].toLowerCase()

  console.log(nextState)

  if (nextState.location.pathname === '/dashboard') replaceState(`/dashboard/${monthName}/categories`)
}
