import { NEW_USER, CHANGE_COLOR } from './types'

export const newUser = user => dispatch => {
  dispatch({
    type: NEW_USER,
    payload: user
  })
}

export const changeColor = () => dispatch => {
  dispatch({
    type: CHANGE_COLOR,
  })
}
