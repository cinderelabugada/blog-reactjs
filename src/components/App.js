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
import PostsList from './Posts/PostsList'

import {
  getAll as getAllPosts
} from '../redux/actions/posts'

const App = () => (
  <ChakraProvider>
    <Box bg='#C4C4C4' minHeight='100vh'>
      <Header />
      <Flex>
        <Menu />
        <PostsList />
      </Flex>
    </Box>
  </ChakraProvider>
)

export default App

