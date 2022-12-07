import '../styles/Login.css'
import { useState } from "react"
import { loginApi } from '../api'
const Login = () => {
    const [inputs, setInputs] = useState({})
    const {email, password} = inputs;

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        const loginRequest = {email, password}
        alert(`${JSON.stringify(loginRequest)}`)
        loginApi(loginRequest)
        .then((response)=>{
            console.log(`response is ${response.config.data}`)
            localStorage.setItem('token', JSON.stringify(response.config.data))
        })
        .catch((err)=>{
            console.log(err)
            alert('이메일, 닉네임 그리고 비밀번호 다시 입력')
        })
    }

    return (
    <>
        EMAIL: <input type="text" name="email" onChange={onChange} /><br/>
        PASSWORD: <input type="text" name="password" onChange={onChange} /><br/>
        <button onClick={onClick}> 로그인 </button>

    
    </>
)}
export default Login