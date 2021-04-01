import React from 'react'
import {
  Flex,
  Heading
} from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex
      bg='#EAD637'
      color='#333'
      height='200px'
      alignItems='center'
      justifyContent='center'
    >
      <Heading>
        Blog Bugado
      </Heading>
    </Flex>
  )
}

export default Header

