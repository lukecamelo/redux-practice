import { NEW_USER } from '../actions/types'

const initialState = {
  users: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        users: [...state.users, action.user]
      }
    default:
      return state
  }
}
