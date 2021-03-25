import React from 'react'
import { Box, Heading } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box
      bg='#EAD637'
      w='100%'
      h='200px'
      p={4}
      color='white'
    >
      <Box
        bg='gray.900'
        maxW='xs'
        p={4}
        borderRadius={4}
        justifyContent='center'>
        <Heading>
          Blog Bugado
        </Heading>
      </Box>
    </Box>
  )
}

export default Header

