import { useEffect, useState } from "react"
import axios from "axios"

export default function UserList(){
    const [list, setList] = useState([])
    useEffect(() => {
        axios
        .get(`http://127.0.0.1:8000/users/user-list`)
        .then(res => {
            console.log("user list is uploaded.")
            console.log(res.data)
            setList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
    
    return(<>
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <td>username</td><td>password</td><td>created_at</td><td>rank</td><td>point</td>
            </tr>
          </thead>
          <tbody>
            {list && list.map(({username, password, created_at, rank, point}) =>(
                <tr key={username}>
                <td>{username}</td><td>{password}</td><td>{created_at}</td><td>{rank}</td><td>{point}</td>
                </tr>
            ))}
          </tbody>
        </table>
        </>)
}