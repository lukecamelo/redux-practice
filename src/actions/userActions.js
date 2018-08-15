import { NEW_USER } from './types'

export const newUser = user => dispatch => {
  dispatch({
    type: NEW_USER,
    payload: user
  })
}
