export const user = (user) => {
  return { type: 'USER', user }
}

export const noUser = () => {
  return { type: 'NO_USER', user: null }
}
