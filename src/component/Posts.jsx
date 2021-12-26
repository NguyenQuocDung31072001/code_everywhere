import SingerPost from "./SingerPost"

const posts=[
    {
        image:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title:"Lorem ipsum dolor sit amet",
        timePost:"1 hour ago",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque,"
    },
    {
        image:"https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title:"Lorem ipsum dolor sit amet",
        timePost:"1 hour ago",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque,"
    },
    {
        image:"https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title:"Lorem ipsum dolor sit amet",
        timePost:"1 hour ago",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque,"
    },
    {
        image:"https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title:"Lorem ipsum dolor sit amet",
        timePost:"1 hour ago",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque,"
    },
    {
        image:"https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title:"Lorem ipsum dolor sit amet",
        timePost:"1 hour ago",
        decription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque,"
    }
]
export default function Posts(){
    
    return(
        <div className="w-[870px] flex justify-between flex-wrap m-[20px]">
            {
                posts.map((value)=>{
                    return(
                        <SingerPost image={value.image} title={value.title} timePost={value.timePost} description={value.decription}/>
                    )
                })
            }
        </div>
    )
}