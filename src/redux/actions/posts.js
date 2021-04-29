import api from '../../services/api'
import querystring from 'querystring'
import {
  POSTS_GET_ALL,
  POSTS_CREATE
} from './types'

/**
 * Actions para requisitar todos os posts com paginação
 */

/* Cria uma ação para indicar o inicio da requisição */
const getAllStarted = () => ({
  type: POSTS_GET_ALL.STARTED,
})

/* Cria uma ação para indicar que a requisição */
const getAllSuccess = (data, pagination) => ({
  type: POSTS_GET_ALL.SUCCESS,
  payload: { items: data, pagination }
})

/* Cria um ação para indicar que uma requisição retornou com erros*/
const getAllFailure = () => ({
  type: POSTS_GET_ALL.FAILURE
})

/* Função que coordena a criação das ações para a requisição dos posts */
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
    .catch(err => dispatch(getAllFailure(err)))
}

/* Actions para requisições de criação de posts */
const createStared = (post) => ({
  type: POSTS_CREATE.STARTED,
  payload: post
})

const createSuccess = (post) => {
  console.log(post)
  return ({
    type: POSTS_CREATE.SUCCESS,
    payload: { item: post }
  })
}
const createFailure = (error) => ({
  type: POSTS_CREATE.FAILURE,
  payload: error
})

// TODO: mudar parametro createSuccess para o retorno da
// api: res.data
export const createPost = (post) => dispatch => {
  dispatch(createStared(post))
  return api.post('/posts', post)
    .then(res => {
      console.log(res)
      dispatch(createSuccess({ ...post, ...res.data }))
    })
    .catch(err => dispatch(createFailure(err)))
}

