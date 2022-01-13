import react from "react";
import {Link} from "react-router-dom"
import MedialIcons from "./MediaIcons"
export default function Top(){

    return(
        <div className="flex justify-between items-center text-[20px] fixed top-0 left-0 right-0 h-[50px] text-slate-600 bg-white z-10">
            <div className=" ml-[100px]">
                <MedialIcons/>
            </div>
            <div className="min-w-[500px] flex justify-between">
                <Link to="/home">Home</Link>
                <Link to="">About</Link>
                <Link to="">Contact</Link>
                <Link to="/home/write">Write</Link>
                <Link to="/home/logout">Logout</Link>
            </div>
            <div className="min-w-[70px] flex justify-between items-center mr-[100px]">
                <Link to="/home/settings">
                    <img className="w-[40px] h-[40px] object-cover rounded-[40px]"
                         src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    
                </Link>
                <i className="fas fa-search"></i>
            </div>
        </div>
    )
}