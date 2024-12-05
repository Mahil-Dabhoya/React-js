import { getDatabase, ref, update } from "firebase/database";
import { app } from "../firebase.js";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Edit() {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [editid, setEditId] = useState("");

    useEffect(() => {
        setEditId(location?.state[0]);
        setName(location?.state[1]?.name);
        setPhone(location?.state[1]?.phone);
    }, [location?.state]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app);

        const user = ref(db, `users/${editid}`);
        update(user, {
            name: name,
            phone: phone
        })
        .then(() => {
            alert("Record updated successfully");
            navigate(`/`);
        })
        .catch((error) => {
            console.error("Error updating record: ", error);
            alert("Error updating record");
        });
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Edit Record</h2>
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
                <button type="submit" className="btn btn-primary w-100">Update</button>
            </form>
            <div className="text-center mt-3">
                <Link to="/" className="btn btn-secondary">View Records</Link>
            </div>
        </div>
    );
}

export default Edit;
