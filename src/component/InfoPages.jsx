import MediaIcons from "./MediaIcons"

export default function InfoPages(){

    return(
        <div className="w-[400px] mt-[30px] flex flex-col items-center">
            <div className="w-[300px] h-[1px] bg-black"></div>
            <div className="font-medium">
                <p>ABOUT ME</p>
            </div>
            <div className="w-[300px] h-[0.5px] bg-black"></div>
            <div className="my-[20px]">
                <img className="w-[240px] h-[240px] object-cover" 
                    src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
            </div>
            <div className="w-[300px] mb-[20px]">
                <p>Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id quis proident.</p>
            </div>
            <div className="w-[200px] h-[1px] bg-black"></div>
            <div className="font-medium">
                <p>CATEGORIES</p>
            </div>
            <div className="w-[200px] h-[0.5px] bg-black"></div>
            <div className="flex justify-around w-[180px] my-[25px]">
                <div>
                    <p>Life</p>
                    <p>Sport</p>
                    <p>Tech</p>
                </div>
                <div>
                    <p>Music</p>
                    <p>Style</p>
                    <p>Cinema</p>
                </div>
            </div>
            <div className="w-[200px] h-[0.5px] bg-black"></div>
            <div className="font-medium">
                <p>FOLLOW US</p>
            </div>
            <div className="w-[200px] h-[1px] bg-black"></div>
            <div className="my-[25px]">
                <MediaIcons/>
            </div>
            
        </div>
    )
}