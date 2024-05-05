// 'use client'
// import { useRouter } from "next/navigation";
import style from "../CSS/ThreeCardFrame.module.css";
import Link from 'next/link';
// import { fetchBlogData } from "@/app/api/Blog/route";

function ThreeCardFrame(props){
  // const router =useRouter();
  // const HandleClick =() =>{
  //   console.log("i am")
  //   router.forward({
  //     href: "/Blog",
  //     query : {...props}
  //   })
  // }
 
return (
  <>
  <div className={style.InfoCard_Container}>
    <img src={props.image}/>
    <div className={style.Card_Introduction}>
      <div className={style.Card_Tags}>
        <li className={style.Tags}>{props.tags}</li>
        <li>{props.Date}</li>
      </div>
      <div>
        <h2>{props.Title}</h2>
        <p>{props.Description}</p>
      </div>
     
      <div className={style.buttonAlignment}>
      <Link href={{ pathname: '/Blog', query: { ...props } }} >
        <button>Read More</button>
      </Link>
      
    </div>
    
    </div>

  </div>
  </>
)
}

export default ThreeCardFrame;