import axios from "axios";
const server = `http://localhost:8000`
const dlearnService = {
    iris, getFashion, postFashion, number
}
function handleResponse(response){ 
    return response.text()
        .then(text =>{
            const data = text && JSON.parse(text)
            if(!response.ok){
                if(response.status === 401){
                    window.location.reload()
                }
                const error = (data && data.message) ||
                    response.statusText
                return Promise.reject(error)
            }
            return data
        })
    }
async function iris(id){
    const requestOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id)
    }
    fetch(`${server}/shop/iris`, requestOption)
    .then(handleResponse)
    .then(data => {
        alert(JSON.stringify(data))
    })
    .catch((error) => {
        alert('error :::: '+error);
    });
}
async function postFashion(id){
    const requestOption = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(id)
    }
    fetch(`${server}/shop/fashion`, requestOption)
    .then(handleResponse)
    .then(data => {
        alert('결과: '+JSON.stringify(data))
    })
    .catch((error) => {
        alert('error :::: '+error);
    });
}
async function getFashion(id){
    fetch(`${server}/shop/fashion?id=${id}`)
    .then(handleResponse)
    .then(data => {
        alert('결과: '+JSON.stringify(data))
    })
} 
async function number(id){
    fetch(`${server}/shop/number?id=${id}`)
    .then(handleResponse)
    .then(data => {
        alert('결과: '+JSON.stringify(data))
    })
} 

export default dlearnService