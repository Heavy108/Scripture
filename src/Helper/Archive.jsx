'use client'
import style from "../CSS/Archive.module.css";

const MonthList = (props) => {
  // Function to handle click on a month
  const handleClick = (event) => {
    const monthValue = event.target.getAttribute('data-month');
    const monthName = new Date(props.year, monthValue - 1, 1).toLocaleString('en', { month: 'short' }).slice(0, 3);
    
    // Construct URL with query parameters
    const searchUrl = `/Search?year=${props.year}&month=${monthName}`;

    // Navigate to search page
    window.location.href = searchUrl;
  };

  return (
    <>
      <ul className={style.MonthList}>
        <li>{props.year}: </li>
        {[...Array(12).keys()].map((month) => (
          <li key={month} onClick={handleClick} data-month={month + 1}>
            {new Date(props.year, month, 1).toLocaleString('en', { month: 'short' }).slice(0, 3)}
          </li>
        ))}
      </ul>
      <hr />
    </>
  );
};


function Archive() {
  const currentYear = new Date().getFullYear(); //current year
  const years = Array.from({ length: 20 }, (_, index) => currentYear - index); //goes to 20 years back

  return (
    <>
      <div className={style.ArchConatiner}>
        <div className={style.ArchiveImg}>
          <img src="/Archive.svg" alt="ArchSearch" />
        </div>
        <div className={style.ArchList_cotainer}>
          <h2 className={style.archHeading}>Archive</h2>
          <div className={style.ArchList}>
            {years.map((year, index) => (
              <MonthList key={index} year={year} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Archive;
