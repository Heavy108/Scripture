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

const Data =await fetchCarasoulData()
const items = Data.map((item) => item.toObject());
const data = await fetchData();
const serializedData = data.map((item) => item.toObject());



function Home(){
  return(
    <>
    <NavBar/>
    <Carasoul items={items}/>
    <Mag_Section Data={serializedData} MagazinesPerPage={9}/>
      <Archive/>
      <NewsLetter/>
      <Footer/> 
    </>
  )
}
export default Home;

