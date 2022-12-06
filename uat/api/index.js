import axios from 'axios'
const server = `http://localhost:8000`
export const loginApi = req => axios.post(`${server}/auth/login`, req)