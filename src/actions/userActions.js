import { NEW_USER } from './types'

export const newUser = text => dispatch => {
  dispatch({
    type: NEW_USER,
    payload: text
  })
}
