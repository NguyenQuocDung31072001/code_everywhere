import react, { useEffect, useState } from "react";
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';

function Login(){
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const [dataAPI,setDataAPI]=useState()
    const navigate = useNavigate();
    useEffect(()=>{
        axios({
            method: 'get',
            url: 'http://localhost:5000/',
           
          })
            .then(function (response) {
              setDataAPI(response.data)
              
            });
    },[])
    const checkAccount=()=>{
        
        const lengthOfDataAPI=dataAPI.length
        for(let i=0;i<lengthOfDataAPI;i++){

            if(dataAPI[i].username===username && dataAPI[i].password===password){
                navigate('/home')
            }
        }
    }
    return(
        <div className="w-screen h-screen flex items-centre bg-slate-200">
            <div className="m-auto h-1/2 w-1/2 bg-cyan-600 flex flex-col justify-center items-center text-white relative">
                <div className="absolute top-0 text-[60px]">
                    <h1>Login</h1>
                </div>
                
                <div className="text-[25px] w-2/3 flex justify-between items-center ">
                    <span>Username</span>
                    <input className="m-3 text-slate-800"
                        onChange={e=>setUsername(e.target.value)} type="text"/>
                </div>
                <div className="text-[25px] w-2/3 flex justify-between items-center">
                    <span>Password</span>
                    <input className="m-3 text-slate-800"
                        onChange={e=>setPassword(e.target.value)} type="password" />
                </div>
                <div className="text-[25px] absolute bottom-[80px]">
                    <span>Don't have account?</span>
                    <Link to="/signin">Sign in</Link>
                </div>
                <button 
                    className="bg-slate-500 w-1/4 h-[50px] text-[25px] rounded-xl absolute bottom-2"
                    onClick={checkAccount}
                    >Login
                </button>
            </div>
        </div>
    )
}
export default Login