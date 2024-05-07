'use client'
import "../global.css";
import style from "@/CSS/DashBoard.module.css";
import Dashmagazines from "@/Helper/DashMagazine";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function DashBoard() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
    // Add your logic here for navigation or other actions
  }

  return (
    <>
    <div className={style.superContainer}>
      <div className={style.Container}>
        <ul className={style.items}>
          <li
            onClick={() => handleClick('Home')}
            className={activeItem === 'Home' ? `${style.activeItem}` : ''}
          >
            Home
          </li>
          <li
            onClick={() => handleClick('Magazines')}
            className={activeItem === 'Magazines' ? `${style.activeItem}` : ''}
          >
            Magazines
          </li>
          <li
            onClick={() => handleClick('Carasoul')}
            className={activeItem === 'Carasoul' ? `${style.activeItem}` : ''}
          >
            Carasoul
          </li>
          <li
            onClick={() => handleClick('Email')}
            className={activeItem === 'Email' ? `${style.activeItem}` : ''}
          >
            Email
          </li>
          <li
            onClick={() => handleClick('Logout')}
            className={activeItem === 'Logout' ? `${style.activeItem}` : ''}
          >
            Logout
          </li>
        </ul>
      </div>

      <div className={style.pageContainer}>
          {activeItem === 'Home' && <Home />}
          {activeItem === 'Magazines' && <Dashmagazines />}
          {activeItem === 'Carasoul' && <DashC />}
          {activeItem === 'Email' && <Email />}
          {activeItem === 'Logout' && <Logout />}
        </div>
        </div>
    </>
  )
}

export default DashBoard;