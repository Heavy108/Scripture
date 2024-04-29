import style from "../CSS/Small_MagInfoCard.module.css";


function SmallInfoCard(props){
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
      <button>Read More</button>
      </div>
    </div>

  </div>
  </>
)
}

export default SmallInfoCard;