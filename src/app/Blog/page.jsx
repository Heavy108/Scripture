'use client'
import "../global.css";
import NavBar from "@/Helper/NavBar";
import Comment from "@/Helper/Comment";
import Footer from "@/Helper/Footer";
import BlogFrame from "@/Helper/BlogFrame";
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
  const pdfaddress = searchParams.get("pdfadress");

  
//  const data = await fetchBlogData(id);
//  const serializedData = data.map((item) => item.toObject());
  return (
    <>
      <NavBar />
    <BlogFrame 
    // data ={serializedData} 
    image ={image}
    tags ={tags}
    Date = {Date}
    Title ={Title}
    field ={field}
    Para1 ={Para1}
    pdfadress= {pdfaddress}
    />
      <Comment />
      <Footer />
    </>
  );
}
export default Blog;
