const genRequestTypes = (name) => ({
    STARTED: `${name.toUpperCase()}_STARTED`,
    SUCCESS: `${name.toUpperCase()}_SUCCESS`,
    FAILURE: `${name.toUpperCase()}_FAILURE`
})

export const POSTS_GET_ONE =
    genRequestTypes('POSTS_GET_ONE')
export const POSTS_GET_ALL =
    genRequestTypes('POSTS_GET_ALL')
export const POSTS_CREATE =
    genRequestTypes('POSTS_CREATE')
