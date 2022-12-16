import axios from "axios"
const server = `http://localhost:8000`
export const irisapi = req => axios.post(`${server}/shop/iris`, req)
export const getFashion = id => axios.get(`${server}/shop/fashion?id=${id}`)
export const postFashion = id => axios.post(`${server}/shop/fashion?id=${id}`)