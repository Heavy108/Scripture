import React from "react";
import style from "../CSS/Pagination.module.css";

function Pagination({
  currentPage,
  handlePrevPage,
  handleNextPage,
  handleChangePage,
  numbers,
  npage,
  firstIndex,
  lastIndex,
  data,
}) {
  // Determine the range of page numbers to display based on the current page
  const startPage = Math.max(1, currentPage - 1); // Ensure startPage is at least 1
  const endPage = Math.min(npage, startPage + 2); // Show only 3 pages at most

  // Generate the list of page numbers to display
  const displayedPages = [];
  for (let i = startPage; i <= endPage; i++) {
    displayedPages.push(i);
  }

  return (
    <div className={style.Component}>
      <p>
        {`Showing ${firstIndex} - ${lastIndex} of ${data} result`}
      </p>
      <div className={style.buttonComp}>
        <button className="material-symbols-outlined" onClick={handlePrevPage} disabled={currentPage === 1}>
          chevron_left
        </button>

        {displayedPages.map((page, i) => (
          <li
            key={i}
            onClick={() => handleChangePage(page)}
            style={{
              textDecoration: currentPage === page ? "underline" : "none",
              textUnderlineOffset: currentPage === page ? "0.3rem" : "none",
              opacity: currentPage === page ? "1" : "",
            }}
            className={style.pageItem}
          >
            {page}
          </li>
        ))}

        <button className="material-symbols-outlined" onClick={handleNextPage} disabled={currentPage === npage}>
          chevron_right
        </button>
      </div>
    </div>
  );
}

export default Pagination;
