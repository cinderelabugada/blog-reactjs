import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ChakraProvider,
  Container,
  Box,
  Flex,
  Heading
} from "@chakra-ui/react"

import Header from './Header'
import Menu from './Menu'
import Post from './Posts/Post'

import {
  getAll as getAllPosts
} from '../redux/actions/posts'

const post = {
  title: 'Post 1',
  content: 'Lorem',
  author: {
    name: 'João da Silva'
  },
  created_at: new Date()
}

const App = () => {
  const dispatch = useDispatch()
  const posts = useSelector(store => store.posts)
  useEffect(() => {
    dispatch(getAllPosts())
  }, [ dispatch ])
  
  return (
    <ChakraProvider>
      <Box bg='#C4C4C4' minHeight='100vh'>
        <Header />
        <Flex>
          <Box w='200px'>
            <Menu />
          </Box>
          <Box>
            {posts.items.map((post, idx) => (
              <Post key={idx} post={post} />
            ))}
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  )
}

export default App

