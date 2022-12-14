import { useState } from "react"
import { irisapi } from "../api"

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
        alert(`iris info : ${JSON.stringify(request)}`)
        irisapi(request)
        .then((res)=>{
            alert(`Response : ${res.data.result}`)
            console.log(`Response : ${res.data.result}`)
            localStorage.setItem('token', JSON.stringify(res.data.result))
        })
        .catch((err)=>{
            console.log(err)
            alert('Please input again.')
        })
    }

    return (
    <>
        petal_width_cm: <input type="text" name="petal_width_cm" onChange={onChange} /><br/>
        petal_length_cm: <input type="text" name="petal_length_cm" onChange={onChange} /><br/>
        sepal_width_cm: <input type="text" name="sepal_width_cm" onChange={onChange} /><br/>
        sepal_length_cm: <input type="text" name="sepal_length_cm" onChange={onChange} /><br/>
        <button onClick={onClick}> Execute </button>
    </>
    )
}

export default Iris