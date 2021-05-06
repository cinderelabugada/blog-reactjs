import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
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
import PostsForm from './Posts/PostsForm'

import {
  getAll as getAllPosts
} from '../redux/actions/posts'

const App = () => (
  <ChakraProvider>
    <Router>
      <Box bg='#C4C4C4' minHeight='100vh'>
        <Header />
        <Flex>
          <Menu />
          <Switch>
            <Route exact path='/'>
              <PostsList />
            </Route>
            <Route
              path='/posts/create/:id?'
              component={PostsForm}
            />
          </Switch>
        </Flex>
      </Box>
    </Router>
  </ChakraProvider>
)

export default App

