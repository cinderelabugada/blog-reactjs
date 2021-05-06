import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Box,
  Flex,
  Link
} from "@chakra-ui/react"
import Post from './Post' 

import {
  getAll as getAllPosts
} from '../../redux/actions/posts'

const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(store => store.posts)
  const page = 0
  const limit = 1

  useEffect(() => {
    dispatch(getAllPosts(page, limit))
  }, [ dispatch ])

  let step
  if (posts.pagination) {
    step = posts.pagination._end - posts.pagination._start
  }

  const go = (_start, _end) => {
    dispatch(getAllPosts(_start, _end))
  }
  
  return (
    <Box
      bg='#EEE'
      w='calc(100vw - 200px)'
      minH='calc(100vh - 200px)'
      p='15px'
    >
      {posts.items.map((post, idx) => (
        <Post key={idx} post={post} />
      ))}
      {(posts.pagination) ? <Flex
        alignItems='center'
        justifyContent='center'
      >
        <Flex justifyContent='space-around'>
          {posts.pagination && posts.pagination._start > 0
            && <Link
              p='0 5px 0 0'
              onClick={
                () => go(
                  posts.pagination._start-step,
                  posts.pagination._end-step
                )
              }
            >Anterior</Link>}
          {posts.pagination._start + 1}
          {(posts.pagination._end != posts.pagination._total)
            && <Link
              p='0 0 0 5px'
              onClick={
                () => 
                  go(
                    posts.pagination._start+step,
                    posts.pagination._end+step
                  )
              }
            >
              Próxima
            </Link>}
        </Flex>
      </Flex> : ''}
    </Box>
  )
}

export default PostsList
