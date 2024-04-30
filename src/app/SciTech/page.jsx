import "../global.css";
import MagCard from "../../Helper/Mag_Intro_Card";
import NavBar from "../../Helper/NavBar";

import Footer from "../../Helper/Footer";
function Byte(){
  
    
    const Title="SciTech"
    const Image="/SciTech.svg"
    const Description= "< SciTech Description > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  
  return (
    <>
     <NavBar/>
      <MagCard 
      title={Title}
      image ={Image}
      Info ={Description}
      />
    <Footer/>
     


    </>
  )
}
export default Byte;