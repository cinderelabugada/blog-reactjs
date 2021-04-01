import {
  POSTS_GET_ALL
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
      return {
        ...initialState,
        isLoading: true
      }
    case POSTS_GET_ALL.FAILURE:
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
    default:
      return state

  }
}

export default posts


