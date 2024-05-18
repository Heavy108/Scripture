// 'use Client'
import "../global.css";
import Carasoul from "../../Helper/Carasoul";
import Mag_Section from "../../Helper/MagCluster";
import NavBar from "../../Helper/NavBar";
import Archive from "../../Helper/Archive";
import NewsLetter from "../../Helper/Newsletter";
import Footer from "../../Helper/Footer";
// import {Data} from "../../JS/Data";

import { fetchData } from "../api/Home/route";
import { fetchCarasoulData } from "@/app/api/Carasoul/route";


// const serializedData = data.map((item) => item.toObject());



async function Home(){
  const Data =await fetchCarasoulData()
const data = await fetchData();
  return(
    <>
    <NavBar/>
    <Carasoul items={Data}/> 
    / <Mag_Section Data={data} MagazinesPerPage={9}/>
      <Archive/>
      <NewsLetter/>
      <Footer/> 
    </>
  )
}
export default Home;

