import api from '../../services/api'
import {
  POSTS_GET_ALL
} from './types'

const getAllStarted = () => ({
  type: POSTS_GET_ALL.STARTED,
})

const getAllSuccess = payload => ({
  type: POSTS_GET_ALL.SUCCESS,
  payload
})

const getAllFailure = () => ({
  type: POSTS_GET_ALL.FAILURE
})

export const getAll = () => dispatch => {
  dispatch(getAllStarted())
  return api.get('/posts/?_expand=author')
    .then(res =>
      dispatch(getAllSuccess(res.data))
    )
    .catch(err => getAllFailure(err))
}

/*
const postStared = (post) => ({
  type: POSTS_POST.STARTED,
  payload: post
})

const postSuccess = (post) => ({
  type: POSTS_POST.SUCCESS,
  payload: post
})

const postFailure = (error) => ({
  type: POSTS_POST.FAILURE,
  payload: error
})

export const post = () => dispatch => {
  dispatch()
}
*/
