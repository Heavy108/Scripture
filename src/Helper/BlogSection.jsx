import style from "@/CSS/Blog.module.css";
import ViewPDFButton from "@/Helper/pdf";

function BlogSection({ data }) {
  const dataArray = Object.values(data);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const monthName = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `${monthName} ${day}, ${year}`;
  };

  return (
    <>
      {dataArray.map((item, index) => (
        <div className={style.blog_container} key={index}>
          <div className={style.InfoCard_Container}>
            <img src={`data:image/jpeg;base64,${item.image}`} alt="Blog Image" />

            <div className={style.Card_Introduction}>
              <div className={style.Card_Tags}>
                <li className={style.Tags}>{item.tags}</li>
                <li>{formatDate(item.Date)}</li>
                <li>{item.field}</li>
              </div>

              <h2>{item.Title}</h2>

              <div className={style.buttonAlignment}>
                <ViewPDFButton pdfPath={item.pdfaddress} />
              </div>
            </div>
          </div>

          <div className={style.Para1Container}>
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
