import Displaymag from "@/Helper/DisplayMag";
import { fetchData } from "../api/Home/route";
import DashBoard from "@/Helper/DashBoardNavigation";

const  Data = await fetchData();

function Display(){
    return(
        <>
        {/* <DashBoard/> */}
        <Displaymag data={Data}/>
        </>
    )
}

export default Display;