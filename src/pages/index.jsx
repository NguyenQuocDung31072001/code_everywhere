import Top from "../component/Top"
import {
    BrowserRouter,
    Routes,
    Route
}from "react-router-dom"
import Home from "./home"
import Write from "./write"
import Setting from "./settings"
export default function IndexPages(){

    return(
        <div>
            <Top/>
            
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home/write" element={<Write/>}/>
                    <Route path="/settings" element={<Setting/>}/>
                </Routes>
            
            
        </div>
    )
}