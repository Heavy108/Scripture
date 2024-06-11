import style from "@/CSS/Modal.module.css"
import { useState } from "react";
function Modal({closeModal,message}){
    
    return (
        <>
        <div className={style.MOdalHead}>
        <div className={style.Modal}>
            <h3>{message}</h3>
            <button className={style.close} onClick={closeModal}>Close</button>
        </div>
        </div>
        </>
    )
}
export default Modal;