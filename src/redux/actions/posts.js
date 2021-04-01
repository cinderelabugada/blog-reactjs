import api from '../../services/api'
import querystring from 'querystring'
import {
  POSTS_GET_ALL
} from './types'

const getAllStarted = () => ({
  type: POSTS_GET_ALL.STARTED,
})

const getAllSuccess = (data, pagination) => ({
  type: POSTS_GET_ALL.SUCCESS,
  payload: { items: data, pagination }
})

const getAllFailure = () => ({
  type: POSTS_GET_ALL.FAILURE
})

export const getAll = (_start, _end) => dispatch => {
  const qs = querystring.stringify({
    _start,
    _end,
    _expand: 'author'
  })
  dispatch(getAllStarted())
  return api.get(`/posts/?${qs}`)
    .then(res => {
      const pagination = {
        _start,
        _end,
        _total: res.headers['x-total-count']
      }
      dispatch(getAllSuccess(res.data, pagination))
    })
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
