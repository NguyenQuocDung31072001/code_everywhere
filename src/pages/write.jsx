import Top from "../component/Top"

export default function Write(){

    return(
        <div className="mt-[80px]">
            <Top/>

            <div className="ml-[180px] ">
                <div>
                    <img className="w-[1050px] h-[250px] object-cover rounded-[10px]" 
                        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                </div>
                <div className="relative mt-[20px]">
                    <label for="upload">
                        <i className="fas fa-plus-circle text-[30px] text-zinc-400"></i>
                        <input type="file" id="upload" className="hidden"/>
                    </label>
                    
                    <input className="ml-[20px] focus:outline-none text-[25px]" 
                        type="text" placeholder="Title"/>
                    <button className="bg-teal-700 text-white absolute right-[100px] px-[10px] py-[5px] rounded-[10px]"
                        >Pushlish</button>
                </div>
                <div className="mt-[20px]">
                    <input className="focus:outline-none text-[20px]"
                            type="text" placeholder="Tell your story ..."/>
                </div>
            </div>


        </div>
    )
}