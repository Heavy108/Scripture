import style from "@/CSS/Blog.module.css";

import { Data4 } from "@/JS/Data";
function BlogFrame(){
    return(<>
    <div className={style.blog_container}>
    <div className={style.InfoCard_Container}>
      <img src="./1.webp" />
      <div className={style.Card_Introduction}>
        <div className={style.Card_Tags}>
          <li className={style.Tags}>GDSC</li>
          <li>sdfsdfs</li>
          <li>machine lea</li>
        </div>

        <h2>sdfjewfnkjwef</h2>

        <div className={style.buttonAlignment}>
          <button>Download</button>
          <button>View</button>
        </div>
      </div>
    </div>

    <div className={style.Para1Container}>
      {Data4.map((item, index) => (
        <div
          key={index}
          className={style.content}
          dangerouslySetInnerHTML={{ __html: item.Para1 }}
        />
      ))}
    </div>
  </div>
  </>)
}

export default BlogFrame;