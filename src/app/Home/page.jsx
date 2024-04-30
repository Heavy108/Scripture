// 'use Client'
import "../global.css";
import Carasoul from "../../Helper/Carasoul";
import Mag_Section from "../../Helper/MagCluster";
import NavBar from "../../Helper/NavBar";
import Archive from "../../Helper/Archive";
import NewsLetter from "../../Helper/Newsletter";
import Footer from "../../Helper/Footer";
import {Data} from "../../JS/Data";





function Home(){
  return(
    <>
    <NavBar/>
    <Carasoul/>
    <Mag_Section Data={Data} MagazinesPerPage={9}/>
      <Archive/>
      <NewsLetter/>
      <Footer/> 
    </>
  )
}
export default Home;

