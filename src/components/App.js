import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"

import Header from './Header'

const App = () => (
  <ChakraProvider>
    <Header />
    <Container>
      <Box>
      <Heading>
        Post 1
      </Heading>
    </Container>
  </ChakraProvider>
)

export default App

