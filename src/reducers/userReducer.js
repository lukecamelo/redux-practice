import { NEW_USER } from '../actions/types'

const initialState = {
  username: '',
  password: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_USER:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password
      }
    default:
      return state
  }
}
