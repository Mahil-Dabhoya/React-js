import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Add() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app);
        let id = Math.floor(Math.random() * 100000);
        set(ref(db, `users/${id}`), {
            name: name,
            phone: phone
        });
        alert("Record added");
        setName("");
        setPhone("");
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Add Record</h2>
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input 
                        type="text" 
                        id="name"
                        className="form-control" 
                        onChange={(e) => setName(e.target.value)} 
                        value={name} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number:</label>
                    <input 
                        type="number" 
                        id="phone"
                        className="form-control" 
                        onChange={(e) => setPhone(e.target.value)} 
                        value={phone} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
            <div className="text-center mt-3">
                <Link to="/" className="btn btn-secondary">View Records</Link>
            </div>
        </div>
    );
}

export default Add;
