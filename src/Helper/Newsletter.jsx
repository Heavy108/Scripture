"use client";
import style from "../CSS/Newsletter.module.css";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import Modal from "./Modal";

function NewsLetter() {
  const initialState = {
    email: "",
    username: "",
  };

  const [user, setUser] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState({ show: false, message: "" });

  const closeModal = () => {
    setShowModal({ show: false, message: "" });
  };

  const getCurrentDate = () => {
    const date = new Date();
    return date.toISOString(); // Convert date to ISO string format
  };

  const onSubscribe = async () => {
    try {
      const userDataWithDate = {
        ...user,
        date: getCurrentDate(), // Add current date to user data
      };

      const response = await axios.post("/api/Newsletter", userDataWithDate);
      console.log(" success", response.data);

      setShowModal({ show: true, message: "Check Your Email For Verification" });
      setUser(initialState); // Clear input fields
    } catch (error) {
      if (error.response.data.error == "User already exists") {
        setShowModal({ show: true, message: "Email already exists" });
      } else {
        console.log(" failed", error.message);
        setShowModal({ show: true, message: "Unexpected Error Occured" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showModal.show && (
        <Modal closeModal={closeModal} message={showModal.message} />
      )}
      <div className={style.Newsletter_outerFrame}>
        <div className={style.Subscribe_Section}>
          <h2>Subscribe Newsletter</h2>
          <p>Subscribe to our email & get updates right your inbox</p>

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

          <button
            className={style.Subscribe_button}
            onClick={onSubscribe}
            disabled={loading}
          >
            {loading ? "Processing..." : "Subscribe"}
          </button>
        </div>

        <div className={style.Newsletter_image}>
          <img src="/Newsletter.svg" alt="Newsletter image" />
        </div>
      </div>

      <div className={style.horizontal_line}>
        <span className={style.Subscribe_message}>
          would you like us to report on something specific? <b>Let Us Know!</b>
        </span>
      </div>
    </>
  );
}

export default NewsLetter;
