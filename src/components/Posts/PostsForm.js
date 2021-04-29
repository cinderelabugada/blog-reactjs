import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createPost } from '../../redux/actions/posts'

import {
  Input,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  FormHelperText
} from "@chakra-ui/react"

const initialState = {
  title: '',
  content: ''
}

const PostsForm = () => {
  const [data, setData] = useState(initialState)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost(data))
    setData(initialState)
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel htmlFor="title">Título:</FormLabel>
        <Input
          id="title"
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="content">Conteúdo:</FormLabel>
        <Textarea
          id="content"
          type="text"
          size="lg"
          name="content"
          value={data.content}
          onChange={handleChange}
        />
      </FormControl>

      <Button
        colorScheme='teal'
        type='submit'>
          Enviar
      </Button>
      <Button colorScheme='red'>Cancel</Button>
    </form>
  )
}

export default PostsForm
