import { useState } from "react"
import dlearnService from "../api"

const Stock = () => {
    const [inputs, setInputs] = useState({})
    const {id} = inputs
    const onChange = e => {
      e.preventDefault()
      const {value, name} = e.target
      setInputs({...inputs, [name]: value})
    }
    const onClick = e => {
        e.preventDefault()
        dlearnService.stock(id)
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }
    return(<>
    <form method="get">
    <h1>Stock Predict</h1>
    <p>Please input date that you want to know price.</p>
    <input type="text" className="box" placeholder="MNIST No." name="id" onChange={onChange}/>
    <button onClick={onClick}>Find</button>
    </form>
    </>)
}
export default Stock