import {Link, Route,Routes} from "react-router-dom"
import Post from "../pages/Post"
export default function SingerPost({id,image,title,timePost,description}){

    return(
        <div className="flex flex-col items-center w-[435px] px-[20px] mb-[20px] ">
            <div>
                <img className="w-[385px] h-[280px] object-cover rounded-[10px]" 
                    src={image} alt="" />
            </div>
            <div className="mt-2 w-[70px] flex justify-between text-[12px] text-amber-600">
                <span>Music</span>
                <span>Life</span>
            </div>
            <div className="my-[20px]">
                <Link className="font-semibold text-[22px]" to={`/home/post/${id}`}>{title}</Link>
            </div>
            <div className="text-stone-400 text-[15px]">
                <span>{timePost}</span>
            </div>
            <div className="my-[20px]">
                <p>{description}</p>
            </div>
        </div>
    )
}