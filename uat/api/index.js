import axios from 'axios'

export const userLogin = req =>axios.post(`http://127.0.0.1:8000/users/login`, req)