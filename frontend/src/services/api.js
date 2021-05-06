import axios from 'axios'

const BASE_URL = process.env.API_URL

const instance = axios.create({
  baseURL: BASE_URL,
})

export default instance
