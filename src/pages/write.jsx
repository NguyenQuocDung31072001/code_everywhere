import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Top from "../component/Top"

export default function Write(){
    const navigate=useNavigate()
    const [image,setImage]=useState()
    const [title,setTitle]=useState('')
    const [story,setStory]=useState('')
    
    const onImageChange=async (e)=>{
            // const base64Image=await convertBase64(e.target.files[0])
            setImage(e.target.files[0])
            // setImage(URL.createObjectURL(e.target.files[0]))
    }

    // const convertBase64=(file)=>{
    //     return new Promise((resole,reject)=>{
    //         const fileReader=new FileReader()
    //         fileReader.readAsDataURL(file)
    //         fileReader.onload=()=>{
    //             resole(fileReader.result)
    //         }
    //         fileReader.onerror=(error)=>{
    //             reject(error)
    //         }
    //     })
    // }
    const onTitleChange=(e)=>{
        setTitle(e.target.value)
    }
    const onStoryChange=(e)=>{
        setStory(e.target.value)
    }
    const onSubmit=()=>{
        let nameImage=''
        if(image){
            const formData=new FormData()
            formData.append("nameFile",Date.now() + image.name)
            nameImage=Date.now() + image.name
            formData.append("image",image)
            axios({
                method:"post",
                url:"http://localhost:5000/storyImage",
                data:formData
            }).then((res)=>{
                console.log(res.data)
            })
        }
        if(title && story){
            axios({
                method:'post',
                url:'http://localhost:5000/story',
                data:{
                    image:nameImage,
                    title:title,
                    author:'dung nguyen',
                    time:new Date().toISOString().replace('-','/').split('T')[0].replace('-','/'),
                    story:story
                }
            }).then((res)=>{
                if(res.data.message==='post success'){
                    navigate('/home')
                }
            })   
        }
    }

    return(
        <div className="mt-[80px]">
            <Top/>
            <div className="ml-[180px] ">
                <div>
                    {
                        image && <img className="w-[1050px] h-[250px] object-cover rounded-[10px]" 
                                    src={URL.createObjectURL(image)} alt="" />
                    }
                 </div>
                <div className="relative mt-[20px]">
                    <label htmlFor="upload">
                        <i className="fas fa-plus-circle text-[30px] text-zinc-400"></i>
                        <input type="file" id="upload" onChange={onImageChange} className="hidden"/>
                    </label>
                    
                    <input className="ml-[20px] focus:outline-none text-[25px]" 
                        onChange={onTitleChange}
                        type="text" placeholder="Title"/>
                    <button className="bg-teal-700 text-white absolute right-[100px] px-[10px] py-[5px] rounded-[10px]"
                        onClick={onSubmit}
                        >Pushlish</button>
                </div>
                <div className="mt-[20px]">
                    <textarea className="focus:outline-none text-[20px] "
                        onChange={onStoryChange}
                        cols={100}
                        rows={50}
                        type="text" placeholder="Tell your story ..."/>
                </div>
            </div>


        </div>
    )
}