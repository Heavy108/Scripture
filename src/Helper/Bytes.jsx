import MagCard from "./Mag_Intro_Card";

function Byte(){
  
    
    const Title="Bytes"
    const Image="/Byte.svg"
    const Description= "< Byte Description > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
  
  return (
    <>
      <MagCard 
      title={Title}
      image ={Image}
      Info ={Description}
      />
     


    </>
  )
}
export default Byte;