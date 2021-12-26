import react from "react";

export default function HeaderTop(){


    return(
        <div className="mt-[100px] flex flex-col items-center relative">
            <div className="absolute top-[20px] flex flex-col items-center">
                <p className="text-[20px] absolute ">React & Node</p>
                <h1 className="text-[100px]">BLOG</h1>
            </div>
            <div className="mt-[80px] min-w-full ">
                <img className="h-[450px] min-w-full object-cover"
                    src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            </div>
        </div>
    )
}