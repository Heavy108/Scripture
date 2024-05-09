'use client'
import { useState } from 'react';
import style from "@/CSS/DashCarasoul.module.css";
import axios from 'axios';

function DashCarasoul({ Data }) {
  const [editingItems, setEditingItems] = useState({});

  const handleEditClick = (id) => {
    setEditingItems((prevEditingItems) => ({
      ...prevEditingItems,
      [id]: true,
    }));
  };

  const handleInputChange = (id, field, value) => {
    console.log("from handler",{id})
    setEditingItems((prevEditingItems) => ({
      ...prevEditingItems,
      [id]: {
        ...(prevEditingItems[id] || {}),
        [field]: value,
        _id: id,
      },
    }));
  };

  const handleSaveClick = async(id) => {
    // Save the edited data to your data source
    try{
      console.log("id from page",{id})
      const editedItem = editingItems[id];
    console.log('Edited item:', editedItem);

    const response =await axios.post("/api/DashCarasoul",editedItem);
    setEditingItems((prevEditingItems) => ({
      ...prevEditingItems,
      [id]: false,
    }));
    console.log('sucess' ,response.data);
    }catch(error){
      console.log('failed',error.message);
    }
   
    

   
    


  };

  return Data.map((item, index) => (
    <div key={item._id + index} className={style.table}>
      {editingItems[item._id] ? (
        <>
         <input
            type="text"
            value={editingItems[item._id]?.image || item.image}
            onChange={(e) =>
              handleInputChange(item._id, 'image', e.target.value)
            }
          />
          <input
            type="text"
            value={editingItems[item._id]?.title || item.title}
            onChange={(e) =>
              handleInputChange(item._id, 'title', e.target.value)
            }
          />
          <input
            type="text"
            value={editingItems[item._id]?.text || item.text}
            onChange={(e) => handleInputChange(item._id, 'text', e.target.value)}
          />
          <input
            type="text"
            value={editingItems[item._id]?.address || item.address}
            onChange={(e) =>
              handleInputChange(item._id, 'address', e.target.value)
            }
          />
          <input
            type="text"
            value={editingItems[item._id]?.bg_color || item.bg_color}
            onChange={(e) =>
              handleInputChange(item._id, 'bg_color', e.target.value)
            }
          />
          <button onClick={() => handleSaveClick(item._id)}>Save</button>
        </>
      ) : (
        <>
         <h4>{item._id}</h4>
          <img src={item.image} alt={item.title} />
          <h4>{item.title}</h4> 
          <p>{item.text}</p>
          <h4>{item.address}</h4>
          <h4>{item.bg_color}</h4>
          <button onClick={() => handleEditClick(item._id)}>Edit</button>
        </>
      )}
    </div>
  ));
}

export default DashCarasoul;