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
 
  const Data =await  fetchBlogData(id)
  // console.log(Data)
  //
  return (
    <>
      <NavBar />
      <BlogSection data={Data} />
      <Comment blogId={id} />

      <Footer />
    </>
  );
}
export default Blog;
