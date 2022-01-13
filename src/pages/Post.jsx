import { useParams,useNavigate } from "react-router-dom"
import Top from "../component/Top"
import InfoPages from "../component/InfoPages"
import { useEffect, useState } from "react"
import axios from "axios"
export default function Post(){
    const params=useParams()
    const navigate=useNavigate()
    const [Post,setPost]=useState()
    const [formEdit,setFormEdit]=useState(false)
    const [image,setImage]=useState()
    const [flatImage,setFlatImage]=useState(false)
    const [prevImage,setPrevImage]=useState('')
    const [title,setTitle]=useState()
    const [author,setAuthor]=useState()
    const [story,setStory]=useState()
    const URLImg="http://localhost:5000/images/"
    const callBack=(res)=>{
        setPost(res)
        setImage(res.image)
        setPrevImage(res.image)
        setTitle(res.title)
        setAuthor(res.author)
        setStory(res.story)
    }
    useEffect(()=>{
        axios({
            method:'post',
            url:'http://localhost:5000/storyID',
            data:{
                param:params.id
            }
        }).then((res)=>{
            callBack(res.data.post)
        })
    },[])

    const editPost=()=>{
        let nameImage
        if(image){
            const formData=new FormData()
            formData.append('nameFile',Date.now()+image.name)
            nameImage=Date.now()+image.name
            formData.append('image',image)
            axios({
                method:'post',
                url:'http://localhost:5000/storyImage',
                data:formData
            }).then((res)=>{
                console.log(res.data)
            })
        }
        axios({
            method:'put',
            url:'http://localhost:5000/story',
            data:{
                id:params.id,
                nameImage:nameImage,
                prev_img:prevImage,
                title:title,
                author:author,
                story:story
            }
        }).then((res)=>{
            if(res.data.message==='edit success'){
                window.location.reload()
            }
        })
    }

    const deletePost=()=>{
        axios({
            method:'delete',
            url:'http://localhost:5000/story',
            data:{
                id:params.id,
                prev_img:prevImage
            }
        }).then((res)=>{
            if(res.data.message==='delete success'){
                navigate('/home')
            }
        })
    }
    const changeImage=async (e)=>{
        setFlatImage(true)
        setImage(e.target.files[0])
    }
    return(
        <div className="flex justify-between mt-[65px]">
            <Top/>
                {
                    Post && !formEdit && (
                        <div className="w-[1050px] ml-[20px] ">
                            <img className="w-[1050px] h-[300px] object-cover rounded-[10px]" 
                                src={URLImg+Post.image} alt="" />
                            <div className="relative flex justify-center items-center">
                                <p className="text-[30px]">{Post.title}</p>
                                <div className="absolute right-[10px] w-[40px] flex justify-between">
                                    <i className="far fa-edit text-green-700 cursor-pointer"
                                        onClick={()=>setFormEdit(true)}    
                                    ></i>
                                    <i className="far fa-trash-alt text-red-500 cursor-pointer"
                                        onClick={deletePost}
                                    ></i>
                                </div>
                            </div>
                            <div className="flex justify-between text-yellow-500">
                                <p>Author:{Post.author}</p>
                                <p>{Post.timePost}</p>
                            </div>
                            <div className="mt-[20px]">
                                <p>{Post.story}</p>
                            </div>
                        </div>
                    )                  
                }
                {
                    Post && formEdit && (
                        <div className="ml-[20px]">
                            <label htmlFor="file_image">
                                <img src={flatImage?(URL.createObjectURL(image)):(URLImg+Post.image)} alt=""
                                    className="w-[1050px] h-[300px] object-cover rounded-[10px]" />
                                <input type="file" id="file_image"
                                    className="hidden" onChange={changeImage}
                                />
                            </label>
                            <div className="flex justify-center">
                                <input className="text-[30px] outline-none w-[500px] text-center"
                                    type="text" value={title}
                                    onChange={(e)=>setTitle(e.target.value)}
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="text-yellow-500">
                                    <span>Author:</span>
                                    <input className="outline-none w-[900px]" 
                                        type="text" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                                    
                                </div>
                                <div className="text-yellow-500">
                                    <span>{Post.timePost}</span>
                                </div>
                            </div>
                            <div>
                                <textarea className="outline-none"
                                    name="" id="" cols="140" rows="15" onChange={(e)=>setStory(e.target.value)}>
                                    {story}
                                </textarea>
                            </div>
                            <div className="relative">
                                <div className="absolute right-[10px] flex justify-between w-[220px] text-white pb-[20px]">
                                    <button className="bg-gray-500 rounded-[5px] px-[30px] py-[10px]"
                                         onClick={()=>setFormEdit(false)}>Cancel</button>
                                    <button className="bg-teal-700 rounded-[5px] px-[30px] py-[10px]" 
                                        onClick={editPost}>Edit</button>
                                </div>

                            </div>
                        </div>
                    )
                }
            <div className="">
                <InfoPages/>
            </div>
        </div>
    )
}