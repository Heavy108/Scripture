
import style from "../CSS/Archive.module.css";
const MonthList = (props) => {
  //Months List
  return (
    <>
      <ul className={style.MonthList}>
        <li>{props.year}: </li>
        <li>Jan</li>
        <li>Feb</li>
        <li>Mar</li>
        <li>Apr</li>
        <li>May</li>
        <li>Jun</li>
        <li>Jul</li>
        <li>Aug</li>
        <li>Sep</li>
        <li>Oct</li>
        <li>Nov</li>
        <li>Dec</li>
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
        <div style={{ width: "25.12rem" }}>
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
