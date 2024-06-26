'use client'
import style from "../CSS/MagCluster.module.css";
import React, { useState } from "react";
import Pagination from "./Pagination";
import ThreeCardFrame from "./ThreeCardFrame";
import Magazine from "../Helper/Magazine_Frame_1";

function Mag_Section({ Data, MagazinesPerPage }) {
  const [currentPage, setCurrentPage] = useState(1);

  // Reverse the Data array
  const reversedData = [...Data].reverse();

  const lastIndex = currentPage * MagazinesPerPage;
  const firstIndex = lastIndex - MagazinesPerPage;
  const records = reversedData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(reversedData.length / MagazinesPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handlePrevPage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={style.All_magazine}>
      <center className={style.mag_head}>
        <h4>All Magazine</h4>
      </center>

      {MagazinesPerPage > 3 ? (
        records.map((items, index) => (
          <Magazine
            key={index}
            {...items} // Passing all properties from 'items' as props
          />
        ))
      ) : (
        records.map((items, index) => (
          <ThreeCardFrame
            key={index}
            {...items} // Passing all properties from 'items' as props
          />
        ))
      )}

      <Pagination
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handleChangePage={handleChangePage}
        numbers={numbers}
        npage={npage}
        firstIndex={firstIndex}
        lastIndex={lastIndex}
        data={reversedData.length}
      />
    </div>
  );
}

export default Mag_Section;
