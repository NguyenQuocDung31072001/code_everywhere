import axios from "axios";
import react, { useState } from "react";
import {Link,useNavigate} from "react-router-dom"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
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
                    navigate('/signin')
                }
            })
    }
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center relative">
            <div className="fixed top-0 w-full h-full">
                <img className="w-full h-full object-cover"
                    src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80 " alt="" />
            </div>
            <div className="w-[320px] h-[100px] bg-sky-500 text-white flex flex-col items-center justify-center absolute top-[170px] rounded-[10px] z-20">
                <p className="text-[30px] font-bold">Join us today</p>
                <p className="">Enter username and password to register</p>
            </div>
            <div className="flex flex-col justify-end items-center w-[350px] h-[350px] px-[10px] bg-slate-50 rounded-[10px] z-10">
                <div className="">
                    <TextField
                        className="w-[300px]"  
                        id="standard-basic" 
                        label="Username" 
                        variant="standard" 
                        onChange={e=>setUsername(e.target.value)}
                    />
                </div>
                <div className="mt-[10px] mb-[20px]">
                    <TextField
                        className="w-[300px]"
                        id="standard-basic" 
                        label="Password" 
                        variant="standard" 
                        onChange={e=>setPassword(e.target.value)}
                    />
                </div>
                <div className="my-[10px] ">
                    <Button 
                        className="w-[300px]" 
                        variant="contained"
                        onClick={signUp}
                        >
                            Register
                    </Button>
                </div>
                <div className="mt-[20px] mb-[30px] flex justify-center">
                    <span>Already have account?</span>
                    <Link className="text-blue-800 font-bold" to="/">Login in</Link>
                </div>
            </div>
            {/* <div className="m-auto h-1/2 w-1/2 bg-cyan-600 flex flex-col justify-center items-center text-white relative">
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
            </div> */}
        </div>
    )
}
export default Signup