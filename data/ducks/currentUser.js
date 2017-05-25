const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const setCurrentUser = (currentUser) => ({
  type: SET_CURRENT_USER,
  currentUser
})

export default (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.currentUser
    default:
      return state
  }
}
