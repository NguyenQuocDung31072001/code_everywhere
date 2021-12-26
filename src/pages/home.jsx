import react from "react";
import Top from "../component/Top"
import HeaderTop from "../component/Header"
import InfoPages from "../component/InfoPages";
import Posts from "../component/Posts";
function Home(){

    return(
        <div>
            <Top/>
            <HeaderTop/>
            <div className="flex justify-between leading-7">
                <Posts/>
                <InfoPages/>
            </div>
            
        </div>
    )
}
export default Home