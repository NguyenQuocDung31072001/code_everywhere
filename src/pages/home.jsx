import react, { useEffect } from "react";
import Top from "../component/Top"
import HeaderTop from "../component/Header"
import InfoPages from "../component/InfoPages";
import Posts from "../component/Posts";
import {useNavigate} from "react-router-dom"
import axios from "axios";
function Home(){
    const navigate=useNavigate()
    useEffect(()=>{
        const token=localStorage.getItem('token')
        axios({
            method:'post',
            url:'http://localhost:5000/checkToken',
            data:{
                token:token
            }
        }).then((response)=>{
            
            if(response.data.message!=='tokenTrue'){
                navigate('/')
            }
        })
    },[])
    return(
        <div>
            <Top/>
            <HeaderTop/>
            <div className="flex justify-between leading-7">
                <Posts/>
                <InfoPages/>
            </div>
            
        </div>
    )
}
export default Home