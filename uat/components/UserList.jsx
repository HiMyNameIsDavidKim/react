import { useState } from "react"
import uatService from "../api"

const UserList = () => {
    const [inputs, setInputs] = useState()

    const onClick = e => {
        e.preventDefault()
        uatService.userList().then(res => {
          const json = JSON.parse(res)
          setInputs(json['result'])
        })
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }
    return(<>
    <h1>ckeck user list</h1>
    <button onClick={onClick}>Find</button>
    </>)
}

export default UserList