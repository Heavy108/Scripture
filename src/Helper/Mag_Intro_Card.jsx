import style from "../CSS/Mag_Intro_Card.module.css";


function MagCard({title,image,Info}){
  return (
    <>
    <div className={style.CardOuter}>
      <div className={style.CardIntroduction}>
        <h1 >{title}</h1>
        <p>{Info}</p>
      </div>
      <img src={image}/>
    </div>
    </>
  )
}

export default MagCard;