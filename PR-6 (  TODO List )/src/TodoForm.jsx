import { useState } from "react";
import './TodoForm.css';

function App() {

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");  
  const [editId, setEditId] = useState(null);  

  const [record, setRecord] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !date || !description) {
      alert("All fields are required");
      return false;
    }

    if (editId) {
      const updatedRecord = record.map((val) => 
        val.userid === editId ? { ...val, name: name, date: date, description: description } : val
      );
      setRecord(updatedRecord);
      localStorage.setItem("users", JSON.stringify(updatedRecord));
      alert("User updated");
      setEditId(null);  
    } else {
      let obj = {
        userid: Math.floor(Math.random() * 100000),
        name: name,
        date: date,
        description: description
      };
      let newRecord = [...record, obj];
      setRecord(newRecord);
      localStorage.setItem("users", JSON.stringify(newRecord));
      alert("User added");
    }
    setName("");  
    setDate("");
    setDescription("");
  };

  const handleDelete = (id) => {
    let d = record.filter(val => val.userid !== id);
    setRecord(d);
    localStorage.setItem('users', JSON.stringify(d));
    alert("Record deleted");
  };

  const handleEdit = (id) => {
    const Edit = record.find(val => val.userid === id);
    setName(Edit.name);
    setDate(Edit.date);
    setDescription(Edit.description);
    setEditId(id);  
  };

  return (
    <div align="center">
      <h2>{editId ? "Edit User" : "TODO App"}</h2>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name :</td>
              <td><input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter name" value={name} /></td>
            </tr>
            <tr>
              <td>Date :</td>
              <td><input type="date" onChange={(e) => setDate(e.target.value)} placeholder="Enter date" value={date} /></td>
            </tr>
            <tr>
              <td>Description :</td>
              <td><input type="text" onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" value={description} /></td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value={editId ? "Update" : "Submit"} />
              </td>
            </tr>
          </tbody>
        </table>
      </form><br /><br />
      <table border={1}>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((val, index) => {
              const { userid, name, date, description } = val;
              return (
                <tr key={userid}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>{date}</td>
                  <td>{description}</td>
                  <td>  
                    <button onClick={() => handleEdit(userid)} className="edit">Edit</button>
                    <button onClick={() => handleDelete(userid)}><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;
