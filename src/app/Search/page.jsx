import "../global.css";
import NavBar from "@/Helper/NavBar";
import Footer from "@/Helper/Footer";
import Mag_Section from "@/Helper/MagCluster";
import { fetchSearchData } from "../api/Search/route";





async function Search({searchParams}){
    const month =searchParams.month;
    const year =searchParams.year;
    
    const data = await fetchSearchData(month, year);
    // const serializedData = data.map((item) => item.toObject());
    
    
    return(<>
    <NavBar/>
    {/* {data.length > 0 ? (
        <Mag_Section Data={data} MagazinesPerPage={3} />
      ) : (
        <div>
          <h2>No magazines found for {month} {year}</h2>
          <img
            src="/NotFound.svg"
            alt="No Data"
            style={{filter:"grayscale()",
                marginLeft:"28rem",
                alignContent:"center"
            }}
            height={800}
          />
        </div>
      )} */}
       <Mag_Section Data={data} MagazinesPerPage={3} />
      
    <Footer/>
    
    </>)

}

export default Search;