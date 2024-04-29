import style from "../CSS/Magazine_Frame_1.module.css";


// Magazine Frame FOR MAIN PAGE
function Magazine({thumbnail,Heading}) {
  return (
    <>
      <div className={style.Magazine_Container}>
        <div className={style.thumbnail}>
          <img src={thumbnail} alt="" />
          <div className={style.mag_Info}>
            <h5>{Heading}</h5>
            <span>Read More</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Magazine;
