import React, { useState } from "react";
import axios from "axios";
function Admin() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    const users=JSON.parse(sessionStorage.getItem('userData'))
    const data = {
      title,
      description,
      author:users._id
    };

    axios.post('https://blog-zozd.onrender.com/api/posts', data)
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          alert('Posted Successfully');
          setTitle("");
          setDescription("");
        } else {
          console.log('Failed to post');
        }
      })
      .catch(error => {
        console.error('Error posting data:', error);
      });
  }
  


  const isButtonDisabled = !(title.trim() && description.trim());

  return (
    <div className="admin-container">
      
      <div className="adminpost">Create a new post</div>
      <form onSubmit={handleSubmit}>
        <label className="postt">
          Title:
          <input type="text"  className="posttext"value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit" disabled={isButtonDisabled} className="postbtn">Post</button>
      </form>
    
    </div>
    
  );
}

export default Admin;


