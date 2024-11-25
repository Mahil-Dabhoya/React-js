import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../../firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

const View = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState("");

    const db = getDatabase(app);

    const viewData = () => {
        const users = ref(db, "users");

        onValue(users, (u) => {
            const data = u.val();
            setRecord(data);
        });
    };

    useEffect(() => {
        viewData();
    }, []);

    const deleteUser = (id) => {
        const users = ref(db, `users/${id}`);
        remove(users);
        alert("Record deleted");
        viewData();
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">View Users</h2>
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Srno</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record && Object.entries(record).map(([key, val]) => {
                            return (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{val.name}</td>
                                    <td>{val.phone}</td>
                                    <td>
                                        <button 
                                            className="btn btn-danger" 
                                            onClick={() => deleteUser(key)}>
                                            Delete
                                        </button>
                                        &nbsp;
                                        <button 
                                            className="btn btn-warning" 
                                            onClick={() => navigate(`/edit`, { state: [key, val] })}>
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <div className="text-center mt-3">
                <Link to={`/add`} className="btn btn-primary">Add New User</Link>
            </div>
        </div>
    );
};

export default View;
