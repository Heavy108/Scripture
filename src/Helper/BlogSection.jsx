import style from "@/CSS/Blog.module.css";
import ViewPDFButton from "@/Helper/pdf";

function BlogSection({ data }) {
  // Convert data object to an array of its values
  const dataArray = Object.values(data);

  // Function to format date string
  const formatDate = (dateString) => {
    // Create a Date object from the date string
    const date = new Date(dateString);
    // Array of month names
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    // Get the month index and use it to get the corresponding month name
    const monthName = monthNames[date.getMonth()];
    // Get the day and year
    const day = date.getDate();
    const year = date.getFullYear();
    // Return formatted date string
    return `${monthName} ${day}, ${year}`;
  };

  return (
    <>
      {dataArray.map((item, index) => (
        <div className={style.blog_container} key={index}>
          <div className={style.InfoCard_Container}>
            {/* Render Image */}
            <img src={`data:image/jpeg;base64,${item.image}`} alt="Blog Image" />

            <div className={style.Card_Introduction}>
              <div className={style.Card_Tags}>
                <li className={style.Tags}>{item.tags}</li>
                {/* Format date before rendering */}
                <li>{formatDate(item.Date)}</li>
                <li>{item.field}</li>
              </div>

              <h2>{item.Title}</h2>

              {/* Render View PDF Button */}
              <div className={style.buttonAlignment}>
                <ViewPDFButton pdfPath={item.pdfaddress} />
              </div>
            </div>
          </div>

          <div className={style.Para1Container}>
            {/* Render Paragraphs */}
            {item.Para1 && (
              <div
                className={style.content}
                dangerouslySetInnerHTML={{ __html: item.Para1 }}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogSection;
