import Top from "../component/Top"
import InfoPages from "../component/InfoPages"
export default function Setting(){

    return(
        <div className="mt-[100px]">
            <Top/>
            <div className="flex justify-between">
                <div className="ml-[20px] w-2/3">
                    <div>
                        <h1 className="text-[40px] text-red-400">Update Your Account</h1>
                    </div>
                    <div className="my-[20px]">
                        <div className="my-[10px]">
                            <p className="text-[20px]">Profile Picture</p>
                        </div>
                        <div className="flex items-center">
                            <img className="w-[80px] h-[80px] object-cover rounded-[20px]" 
                                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            <label className="ml-[10px]" for="upload">
                                <i className="fas fa-user-circle text-[35px] text-orange-600"></i>
                                <input type="file" id="upload" className="hidden"/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="mb-[10px]">
                            <p>Username</p>
                            <input className="w-full pl-[2px] py-[5px] border-b-[1px] border-slate-600 text-[13px] text-zinc-500" 
                                type="text" placeholder="Safak" />
                        </div>
                        <div className="mb-[10px]">
                            <p>Email</p>
                            <input className="w-full pl-[2px] py-[5px] border-b-[1px] border-slate-600 text-[13px] text-zinc-500"
                                type="text" placeholder="safak@gmail.com"/>
                        </div>
                        <div className="mb-[10px]">
                            <p>Password</p>
                            <input className="w-full pl-[2px] py-[5px] border-b-[1px] border-slate-600 text-[13px] text-zinc-500" 
                                type="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="mx-[20px] mt-[20px] flex justify-center items-center w-full text-white">
                        <button className="bg-teal-700 px-[30px] py-[5px] rounded-[10px]">Update</button>
                    </div>
                </div>
                <div>
                    <InfoPages/>
                </div>
            </div>

        </div>
    )
}