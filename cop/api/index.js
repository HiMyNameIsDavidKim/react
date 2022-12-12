import axios from 'axios'
const server = `http://localhost:8000`
export const FakeFaces = req => axios.get(`${server}/moviee/movies/fake-faces`, req)