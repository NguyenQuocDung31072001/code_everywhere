import axios from "axios";
import react, { useState } from "react";
import {useNavigate} from "react-router-dom"
function Signup(){
    const [username,setUsername]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
    const signUp=()=>{
        axios({
            method: 'post',
            url: 'http://localhost:5000/signup',
            data: {
              username: username,
              password: password,
            }
          }).then((res)=>{
                if(res.data.message==="sign up success"){
                    navigate('/')
                }
                else{
                    // console.log('sign up fail!')
                    navigate('/signin')
                }
            })
          
    }
    return(
        <div className="w-screen h-screen flex items-centre bg-slate-200">
            <div className="m-auto h-1/2 w-1/2 bg-cyan-600 flex flex-col justify-center items-center text-white relative">
                <div className="absolute top-0 text-[60px]">
                    <h1>Sign up</h1>
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
                
                <button 
                    className="bg-slate-500 w-1/4 h-[50px] text-[25px] rounded-xl absolute bottom-2"
                    onClick={signUp}
                    >
                        Sign up
                </button>
            </div>
        </div>
    )
}
export default Signup