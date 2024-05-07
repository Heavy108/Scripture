'use client'
import style from "../CSS/Newsletter.module.css";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
// import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
function NewsLetter() {
  // const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    username: "",
  });


  const onSubsuscribe = async () => {
    try {
      
        const response = await axios.post("/api/Newsletter", user);
        console.log(" success", response.data);
        // router.push("/Home");
        
    } catch (error) {
        console.log(" failed", error.message);
        
        // toast.error(error.message);
    }
}
  return (
    <>
      <div className={style.Newsletter_outerFrame}>
        <div className={style.Subscribe_Section}>
          <h2>Subscribe Newsletter</h2>
          <p>Subscribe to our email & get updates right your inbox</p>

          {/* <form action="#" className={style.form}> */}
            <label htmlFor="Name" className={style.label}>
              Name
            </label>

            <div className={style.input_container}>
              <FaUser className={style.icon} />
              <input
                placeholder="Enter your Name"
                className={style.input_field}
                id="username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                value={user.username}
              />
            </div>

            <label htmlFor="email" className={style.label}>
              Email Address
            </label>
            <div className={style.input_container}>
              <MdEmail className={style.icon} />
              <input
                placeholder="Enter Email"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className={style.input_field}
              />
            </div>

            <button className={style.Subscribe_button} onClick={onSubsuscribe}>
              Subscribe
            </button>
          {/* </form> */}
        </div>

        <div className={style.Newsletter_image}>
          <img src="/Newsletter.svg" alt="Newsletter image" />
        </div>
      </div>

      <div className={style.horizontal_line}>
        <span className={style.Subscribe_message}>
          would you like us to report oon something specific?{" "}
          <b>Let Us Know!</b>
        </span>
      </div>
    </>
  );
}

export default NewsLetter;
