import {Link} from "react-router-dom"
export default function SingerPost({id,image,title,author,timePost,story}){
    const URLImg="http://localhost:5000/images/"
    return(
        <div className="flex flex-col items-center w-[435px] px-[20px] mb-[20px] ">
            <div>
                <img className="w-[385px] h-[280px] object-cover rounded-[10px]" 
                    src={URLImg+image} alt="" />
            </div>

            <div className="my-[20px]">
                <Link className="font-semibold text-[22px]" to={`/home/post/${id}`}>{title}</Link>
            </div>
            <div className="text-stone-400 text-[15px]">
                <span>{timePost}</span>
            </div>
            <div className="my-[20px]">
                <p>{story}</p>
            </div>
        </div>
    )
}