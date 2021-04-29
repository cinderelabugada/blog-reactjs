import {
  POSTS_GET_ALL,
  POSTS_CREATE
} from '../actions/types'

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  pagination: null
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_GET_ALL.STARTED:
    case POSTS_CREATE.STARTED:
      return {
        ...initialState,
        isLoading: true
      }
    case POSTS_GET_ALL.FAILURE:
    case POSTS_CREATE.FAILURE:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload
      }
    case POSTS_GET_ALL.SUCCESS:
      return {
        ...initialState,
        items: action.payload.items,
        pagination: action.payload.pagination
      }
    case POSTS_CREATE.SUCCESS:
      return {
        ...initialState,
        items: [...state.items, action.payload.item],
        pagination: state.pagination
      }
    default:
      return state

  }
}

export default posts


