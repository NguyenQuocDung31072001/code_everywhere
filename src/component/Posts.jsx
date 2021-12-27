import SingerPost from "./SingerPost"
import { DataPost } from "../data/dataPosts"
const posts=DataPost
export default function Posts(){
    
    return(
        <div className="w-[870px] flex justify-between flex-wrap m-[20px]">
            {
                posts.map((value,id)=>{
                    return(
                        <SingerPost id={id} image={value.image} title={value.title} timePost={value.timePost} description={value.decription}/>
                    )
                })
            }
        </div>
    )
}