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
    <Flex
      flexFlow='column'
    >
      {/* Title Header*/}
      <Flex
        flexFlow='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Heading variant='h2' size='xl'>
          {post.title}
        </Heading>
        <Box
          flexFlow='column'
          alignItems='flex-end'
        >
          <Text fontSize='md'>
            {post.author.name}
          </Text>
          <Text fontSize='sm'>
            {post.created_at.toLocaleString()}
          </Text>
        </Box>
      </Flex>
      {/* Content */}
      <Flex
        p="20px 0"
        textAlign='justify'
      >
        {post.content}
      </Flex>
    </Flex>
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

