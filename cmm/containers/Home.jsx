import { Route, Routes } from "react-router-dom"
import {Navigation2, Counter, Footer, Hom} from "cmm"
import {Schedule} from "cop"
import {Login, SignUp, UserList} from "uat"
import {Iris} from "iris"
import image from '../../images/fashion.png'
import Fashion from "iris/components/Fashion"
import Number from "iris/components/Number"
import Stock from "iris/components/Stock"
import NaverCrawler from "iris/components/NaverCrawler"

const Home = () => {
    const imageSize = {width: 700, height: 500}
    return (<>
    <table style={{ width: "650px", height: "550px", margin: "0 auto", border: "1px solid black" }}>
        <thead>
            <tr style={{ height: "200px",  border: "1px solid black" }}>
                <td style={{ width: "100%", border: "1px solid black" }}>
                    <Navigation2/>
                </td>
            </tr>
        </thead>
        <tbody>
        <tr style={{ height: "80%",  border: "1px solid black" }}>
            <td style={{ width: "100%", border: "1px solid black", textAlign:"left" }}>
            <Routes>
                <Route path="/home" element={<Hom/>}></Route>
                <Route path="/counter" element={<Counter/>}></Route>
                <Route path="/todos" element={<Schedule/>}></Route>
                <Route path="/signup" element={<SignUp/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/iris" element={<Iris/>}></Route>
                <Route path="/fashion" element={<Fashion/>}></Route>
                <Route path="/number" element={<Number/>}></Route>
                <Route path="/crawler" element={<NaverCrawler/>}></Route>
                <Route path="/user-list" element={<UserList/>}></Route>
                <Route path="/stock" element={<Stock/>}></Route>
            </Routes>
            </td>
        </tr>
        <tr>
            <td>
                <> main image </>
                {/* <img src={image} style={imageSize}/> */}
            </td>
        </tr>
        <tr style={{ width: "100%", height: "20%", border: "1px solid black" }}>
            <td style={{ width: "100%", border: "1px solid black", textAlign:"left" }}>
                <Footer/>
            </td>
        </tr>
        </tbody>
    </table>
    </>)
}
export default Home