import style from "@/CSS/DashMagazine.module.css";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import axios from 'axios'
function Dashmagazines() {
  const [user, setUser] = useState({
    _id: '',
    field: '',
    tags: '',
    Date: '',
    Title: '',
    Description: '',
    image: '',
    Para1: '',
    pdfadress: '',
  });
  

  const onSubmit = async () => {
    try {
     

      const response = await axios.post('/api/DashMagazine', user, {
       
      });
      console.log(' success', response.data);
    } catch (error) {
      console.log(' failed', error.message);
    }
  };

  return (
    <>
    <div className={style.formContainer}>
      <label htmlFor="_id" className={style.label}>
        _id
      </label>
      <div className={style.input_container}>
        <input
          placeholder="Enter _id"
          className={style.input_field}
          id="_id"
          onChange={(e) => setUser({ ...user, _id: e.target.value })}
          value={user._id}
        />
      </div>

      <label htmlFor="field" className={style.label}>
        Field
      </label>
      <div className={style.input_container}>
        <input
          placeholder="Enter Field"
          className={style.input_field}
          id="field"
          onChange={(e) => setUser({ ...user, field: e.target.value })}
          value={user.field}
        />
      </div>

      <label htmlFor="tags" className={style.label}>
        Tags
      </label>
      <div className={style.input_container}>
        <input
          placeholder="Enter Tags"
          className={style.input_field}
          id="tags"
          onChange={(e) => setUser({ ...user, tags: e.target.value })}
          value={user.tags}
        />
      </div>

      <label htmlFor="date" className={style.label}>
        Date
      </label>
      <div className={style.input_container}>
        <input
          type="date"
        //   className={style.input_field}
          id="date"
          onChange={(e) => setUser({ ...user, Date: e.target.value })}
          value={user.Date}
        />
      </div>

      <label htmlFor="title" className={style.label}>
        Title
      </label>
      <div className={style.input_container}>
        <input
          placeholder="Enter Title"
          className={style.input_field}
          id="title"
          onChange={(e) => setUser({ ...user, Title: e.target.value })}
          value={user.Title}
        />
      </div>

      <label htmlFor="description" className={style.label}>
        Description
      </label>
      <div className={style.input_container}>
        <textarea
          placeholder="Enter Description"
          className={style.input_field}
          id="description"
          onChange={(e) => setUser({ ...user, Description: e.target.value })}
          value={user.Description}
        />
      </div>

      <label htmlFor="image" className={style.label} {...getRootProps({ className: 'dropzone' })}>
        Image
      </label>
      <div className={style.input_container}>
        <input
        {...getInputProps()}
          placeholder="Enter Image URL"
          className={style.input_field}
          id="image"
          onChange={(e) => setUser({ ...user, image: e.target.value })}
         
        />
      </div>

      <label htmlFor="para1" className={style.label}>
        Para1
      </label>
      <div className={style.input_container}>
        <textarea
          placeholder="Enter Para1"
          className={style.input_field}
          id="para1"
          onChange={(e) => setUser({ ...user, Para1: e.target.value })}
          value={user.Para1}
        />
      </div>

      <label htmlFor="pdfadress" className={style.label}>
        PDF Address
      </label>
      <div className={style.input_container} {...getRootProps({ className: 'dropzone' })}>
        <input
        {...getInputProps()}
          placeholder="Enter PDF Address"
          className={style.input_field}
          id="pdfadress"
          onChange={(e) => setUser({ ...user, pdfadress: e.target.value })}
          
        />
      </div>
     
      </div>

      <button className={style.Subscribe_button} onClick={onSubmit}>
        Submit
      </button>
    </>
  );
}

export default Dashmagazines;
