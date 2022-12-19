import { useState } from "react"
import dlearnService from "../api"

const Iris = ()=> {
    const [inputs, setInputs] = useState({})
    const {petal_width_cm, petal_length_cm, sepal_width_cm, sepal_length_cm} = inputs;

    const onChange = e => {
        e.preventDefault()
        const {value, name} = e.target 
        setInputs({...inputs, [name]: value})

    }
    const onClick = e =>{
        e.preventDefault()
        const request = {petal_width_cm, petal_length_cm, sepal_width_cm, sepal_length_cm}
        dlearnService.iris(request)
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }
    return (
    <form method="post">
        petal_width_cm : <input id="aa" type="text" className="box" name="petal_width_cm" onChange={onChange} /><br/>
        petal_length_cm : <input type="text" className="box" name="petal_length_cm" onChange={onChange} /><br/>
        sepal_width_cm : <input type="text" className="box" name="sepal_width_cm" onChange={onChange} /><br/>
        sepal_length_cm : <input type="text" className="box" name="sepal_length_cm" onChange={onChange} />
        <button onClick={onClick}> Do it </button>
    </form>
    )
}
export default Iris