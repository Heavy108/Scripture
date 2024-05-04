import style from "@/CSS/Comment.module.css";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";

function Comment(){
    return (
        <>
         <div className={style.Newsletter_outerFrame}>
        <div className={style.Subscribe_Section}>

          <h2>Comment</h2>
          <p>&lt comment Description &gt</p>

          <form action="#" className={style.form}>

            <label htmlFor="Name" className={style.label}>Name</label>

            <div className={style.input_container}>

              <FaUser className={style.icon} />
              <input
                placeholder="Enter your Name"
                className={style.input_field}
              />
              
            </div>

            <label htmlFor="email" className={style.label}>Email Address</label>
            <div className={style.input_container}>
              <MdEmail className={style.icon} />
              <input placeholder="Enter Email" className={style.input_field} />
            </div>
            <label htmlFor="text" className={style.label}>Comment</label>
            <textarea className={style.textarea} placeholder="Write here"></textarea>

            <button className={style.Subscribe_button}>Subscribe</button>
          </form>
        </div>

        <div className={style.Newsletter_image}>
          <img src='/comments.svg' alt="Comment image" />
        </div>
      </div>
        </>
    )
}
export default Comment;