
import "../global.css";
import style from "@/CSS/Blog.module.css";
import NavBar from "@/Helper/NavBar";
import Comment from "@/Helper/Comment";
import Footer from "@/Helper/Footer";
import { Data4 } from "@/JS/Data";
import BlogFrame from "@/Helper/BlogFrame";
import { fetchBlogData } from "../api/Blog/route";
// import { useSearchParams } from "next/navigation";

const Data = await fetchBlogData();
// const serializedData = Data.map((item) => item.toObject());

function Blog() {
  // const searchParams = useSearchParams();
  
  // const image = searchParams.get("image");
  // const tags = searchParams.get("tags");
  // const Date = searchParams.get("Date");
  // const Title = searchParams.get("Title");
  // const field = searchParams.get("field");

  

  return (
    <>
      <NavBar />
    <BlogFrame data ={Data}/>
      <Comment />
      <Footer />
    </>
  );
}
export default Blog;
