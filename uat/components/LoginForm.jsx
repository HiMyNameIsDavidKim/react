import '../styles/Login.css'
import { useState } from "react"
import { userLogin } from '../api'
import { useNavigate } from "react-router-dom"

export default function LoginForm(){
    const [inputs, setInputs] = useState({})
    const {username, password} = inputs;
    const navigate = useNavigate()

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        const request = {username, password}
        alert(`사용자 이름: ${JSON.stringify(request)}`)
        userLogin(request)
        .then((res)=>{
            localStorage.setItem("loginUser", JSON.stringify(res.data))
            alert(`Response is ${localStorage.getItem("loginUser")}`)
            navigate("/home")
        })
        .catch((err)=>{
            console.log(err)
            alert('아이디와 비밀번호를 다시 입력하세요.')
        })

    }

    return (
    <>
        USERNAME: <input type="text" name="username" onChange={onChange} /><br/>
        PASSWORD: <input type="text" name="password" onChange={onChange} /><br/>
        <button onClick={onClick}> 로그인 </button>

    
    </>
)}