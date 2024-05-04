
import style from "@/CSS/Blog.module.css";


function BlogFrame( {
    
    image,
    tags,
    Date,
    Title,
    field,
    Para1,
    pdfadress
}){
    console.log({Para1})
    const Data = JSON.stringify(Para1)
    return(<>
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

        <div className={style.buttonAlignment}>
          <button><a href={pdfadress}>Download</a></button>
          <button>View</button>
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
  </>)
}

export default BlogFrame;