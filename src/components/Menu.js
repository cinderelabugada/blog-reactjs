import React from 'react'
import {
  Flex,
  Heading
} from "@chakra-ui/react"

const Menu = () => {
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril'
  ]
  return (
    <Flex
      p='15px'
      w='200px'
      flexFlow='column'
      alignItems='flex-end'
    >
      <Heading as='h2' size='lg'>
        Meses
      </Heading>
      {meses.map((mes, id) => (
        <a href="#" key={id}>{mes} - 21</a>
      ))}
    </Flex>
  )
}

export default Menu
