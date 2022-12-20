import { useState } from "react"
import dlearnService from "../api"

const NaverCrawler = () => {
    const [inputs, setInputs] = useState({})
    const {id} = inputs
    const onChange = e => {
      e.preventDefault()
      const {value, name} = e.target
      setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        dlearnService.crawler(id)
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }
    return(<>
    <form method="get">
    <h1>Naver Movie Crawler</h1>
    <p>Please input movies rank that do you want to know.</p>
    <input type="text" className="box" placeholder="rank" name="id" onChange={onChange}/>
    <button onClick={onClick}>Find</button>
    </form>
    </>)
}
export default NaverCrawler