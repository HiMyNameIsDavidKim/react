import '../styles/Login.css'
import { useState } from "react"
import { loginApi } from '../api'
const Login = () => {
    const [inputs, setInputs] = useState({})
    const {username, password} = inputs;

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        const loginRequest = {username, password}
        alert(`사용자 이름: ${JSON.stringify(loginRequest)}`)
        loginApi(loginRequest)

    }

    return (
    <>
        USERNAME: <input type="text" name="username" onChange={onChange} /><br/>
        PASSWORD: <input type="text" name="password" onChange={onChange} /><br/>
        <button onClick={onClick}> 로그인 </button>

    
    </>
)}
export default Login