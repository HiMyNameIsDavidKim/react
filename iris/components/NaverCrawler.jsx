import { useState } from "react"
import dlearnService from "../api"

const NaverCrawler = () => {
    const [inputs, setInputs] = useState()

    const onClick = e => {
        e.preventDefault()
        dlearnService.crawler().then(res => {
          const json = JSON.parse(res)
          setInputs(json['result'])
        })
        let arr = document.getElementsByClassName('box')
        for(let i=0; i<arr.length; i++) arr[i].value = ""
    }
    return(<>
    <h1>Naver Movie Crawler</h1>
    <p>You can search movie chart with click find button.</p>
    <button onClick={onClick}>Find</button>
    <table>
      <thead>
        <tr>
        <td>No.</td><td>movie</td>
        </tr>
      </thead>
      <tbody>
        {inputs && inputs.map(({rank, title}) =>(
          <tr key={rank}><td>{rank}</td><td>{title}</td></tr>
        ))}
      </tbody>
    </table>
    </>)
}
export default NaverCrawler