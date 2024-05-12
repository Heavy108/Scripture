// "use client";
import "../global.css";
import NavBar from "@/Helper/NavBar";
import Comment from "@/Helper/Comment";
import Footer from "@/Helper/Footer";
// import { Data4 } from "@/JS/Data";
import { fetchBlogData } from "../api/Blog/route";
import BlogSection from "@/Helper/BlogSection";

async function Blog({searchParams}) {
 const id =searchParams._id
  // console.log(id)
  const Data =await  fetchBlogData(id)
  // console.log(Data)
  // const handleDownload = () => {
  //   const link = document.createElement("a");
  //   link.href = pdfaddress;
  //   link.download = pdfaddress.split("/").pop();
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  return (
    <>
      <NavBar />
      <BlogSection data={Data}/>
      <Comment />
      <Footer />
    </>
  );
}
export default Blog;
