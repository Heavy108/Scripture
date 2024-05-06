"use client";
import "../global.css";
import style from "@/CSS/Blog.module.css";
import NavBar from "@/Helper/NavBar";
import Comment from "@/Helper/Comment";
import Footer from "@/Helper/Footer";
// import { Data4 } from "@/JS/Data";
import ViewPDFButton from "@/Helper/pdf";
import { useSearchParams } from "next/navigation";


function Blog() {
  const searchParams = useSearchParams();
  // const id = searchParams.get("_id");
  const image = searchParams.get("image");
  const tags = searchParams.get("tags");
  const Date = searchParams.get("Date");
  const Title = searchParams.get("Title");
  const field = searchParams.get("field");
  const Para1 = searchParams.get("Para1");
  const pdfaddress = searchParams.get("pdfaddress");

 
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = pdfUrl.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <NavBar />
      <div className={style.blog_container}>
        <div className={style.InfoCard_Container}>
          <img src={image} />
          <div className={style.Card_Introduction}>
            <div className={style.Card_Tags}>
              <li className={style.Tags}>{tags}</li>
              <li>{Date}</li>
              <li>{field}</li>
            </div>

            <h2>{Title}</h2>
            {/* button here */}
            <div className={style.buttonAlignment}>
              <button onClick={handleDownload}>Download</button>
              <ViewPDFButton phdfPath={pdfaddress} />
            </div>
          </div>
        </div>

        <div className={style.Para1Container}>
        {Para1 && (
            <div
              className={style.content}
              dangerouslySetInnerHTML={{ __html: Para1 }}
            />
          )}
        </div>
      </div>

      <Comment />
      <Footer />
    </>
  );
}
export default Blog;
