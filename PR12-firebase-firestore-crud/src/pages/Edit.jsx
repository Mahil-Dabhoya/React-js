import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "../firebase"; // Replace with your Firebase setup path
import "../pages/Edit.css" // Import custom CSS for styling

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState("");

  const db = getFirestore(app);

  useEffect(() => {
    setName(location?.state?.name || "");
    setPhone(location?.state?.phone || "");
    setEditId(location?.state?.id || "");
  }, [location?.state]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDoc = doc(db, `users/${editId}`);
      await updateDoc(userDoc, { name, phone });
      alert("Record updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error updating record:", error);
    }
  };

  return (
    <div className="edit-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-row">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div className="form-row">
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone"
          />
        </div>
        <button type="submit" className="submit-button">Update</button>
      </form>
      <Link to="/" className="back-link">Back to List</Link>
    </div>
  );
};

export default Edit;
