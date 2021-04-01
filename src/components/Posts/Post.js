import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Flex,
  Heading,
  Text
} from "@chakra-ui/react"

const Post = ({post}) => {
  return (
    <Box
      bg='#EEE'
      minH='calc(100vh - 200px)'
      p='15px'
    >
      <Flex
        w='calc(100vw - 200px)'
        flexFlow='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Heading variant='h2' size='xl'>
          {post.title}
        </Heading>
        <Flex
          flexFlow='column'
          alignItems='flex-end'
        >
          <Text fontSize='md'>
            {post.author.name}
          </Text>
          <Text fontSize='sm'>
            {post.created_at.toLocaleString()}
          </Text>
        </Flex>
      </Flex>
      <Box>
        {post.content}
      </Box>
    </Box>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.object.isRequired,
    created_at: PropTypes.object.idRequired
  })
}

export default Post

