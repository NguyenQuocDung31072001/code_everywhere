import SingerPost from "./SingerPost"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Posts(){
    const [dataPost,setDataPost]=useState()
    const callBack=(res)=>{
        setDataPost(res)
    }
    useEffect(()=>{
        axios({
            method:'get',
            url:'http://localhost:5000/story'
        }).then((res)=>{
            callBack(res.data.post)
        })
        
    },[])    

    return(
        <div className="w-[870px] flex justify-between flex-wrap m-[20px]">

            {
                dataPost && dataPost.map((value,key)=>{
                    // console.log(1)
                    return(
                        <SingerPost key={key} id={value._id} image={value.image} title={value.title} author={value.author} timePost={value.timePost} story={value.story}/>
                    )
                })
            }
            
        </div>
    )
}