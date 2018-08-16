import { NEW_USER, CHANGE_COLOR } from '../actions/types'

const initialState = {
  users: [],
  isGreen: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case CHANGE_COLOR:
      return {
        ...state,
        isGreen: !state.isGreen
      }
    default:
      return state
  }
}
