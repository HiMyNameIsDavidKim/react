import { useState } from "react"
import dlearnService from "../api"

const Fashion = () => {
    const [inputs, setInputs] = useState({})
    const {id} = inputs
    const onChange = e => {
      e.preventDefault()
      const {value, name} = e.target
      setInputs({...inputs, [name]: value})
    }
    const onGetClick = e => {
        e.preventDefault()
        dlearnService.getFashion(id)
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }
    const onPostClick = e => {
        e.preventDefault()
        dlearnService.postFashion(id)
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }
    return(<>
    <form method="get">
    <h1>FASHION GET</h1>
    <p>Please input data that you want to know categories.</p>
    <input type="text" className="box" placeholder="Clothes No." name="id" onChange={onChange}/>
    <button onClick={onGetClick}>Find</button>
    </form>
    <form method="post">
    <h1>FASHION POST</h1>
    <p>Please input cloth's data that you want to know categories.</p>
    <input type="text" className="box" placeholder="Clothes No." name="id" onChange={onChange}/>
    <button onClick={onPostClick}>Find</button>
    </form>
    </>)
}
export default Fashion