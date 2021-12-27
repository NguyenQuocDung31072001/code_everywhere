import { useParams } from "react-router-dom"
import { DataPost } from "../data/dataPosts"
import Top from "../component/Top"
import InfoPages from "../component/InfoPages"
export default function Post(){
    const params=useParams()
    const Post=DataPost[params.id]
    return(
        <div className="flex justify-between mt-[65px]">
            <Top/>
            <div className="w-[1050px] ml-[20px] ">
                <img className="w-[1050px] h-[300px] object-cover rounded-[10px]" 
                    src={Post.image} alt="" />
                <div className="relative flex justify-center items-center">
                    <p className="text-[30px]">{Post.name}</p>
                    <div className="absolute right-[10px] w-[40px] flex justify-between">
                        <i className="far fa-edit text-green-700"></i>
                        <i className="far fa-trash-alt text-red-500"></i>
                    </div>
                </div>
                <div className="flex justify-between text-yellow-500">
                    <p>Author:{Post.author}</p>
                    <p>{Post.timePost}</p>
                </div>
                <div className="mt-[20px]">
                    <p>{Post.content}</p>
                </div>
            </div>
            <div className="">
                <InfoPages/>
            </div>
        </div>
    )
}