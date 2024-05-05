
import style from "../CSS/Magazine_Frame_1.module.css";
// import { fetchData } from "@/app/api/Home/route";
import Link from "next/link";

// Magazine Frame FOR MAIN PAGE
function Magazine(props) {
  return (
    <>
      <div className={style.Magazine_Container}>
        <div className={style.thumbnail}>
          <img src={props.image} alt="" />
          <div className={style.mag_Info}>
            <h5>{props.field}</h5>
            <Link className={style.link} href={{pathname: '/Blog' ,query:{...props}}}>
            <span>Read More</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Magazine;
