import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserList.css";

const UserList = ({ users, deleteUser }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(""); // For status filtering
  const [sortOrder, setSortOrder] = useState(""); // For sorting

  // Effect to filter and sort users based on search, status, and sort order
  useEffect(() => {
    let updatedUsers = [...users];

    // Filter by search
    if (search.trim()) {
      updatedUsers = updatedUsers.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by status (if you have a status field in user data)
    if (status) {
      updatedUsers = updatedUsers.filter((user) => user.status === status);
    }

    // Sort users
    if (sortOrder === "asc") {
      updatedUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "desc") {
      updatedUsers.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredUsers(updatedUsers);
  }, [users, search, status, sortOrder]);

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">User List</h2>
      <div className="filter-controls">
        
        <input
          className="filter-input"
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="filter-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">---Select Sorting---</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <Link to="/add-user" className="add-button">
          Add
        </Link>
      </div>
      <table className="user-table">
        <thead>
          <tr>
            <th>Srno</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Hobby</th>
            <th>Date</th>
            <th>City</th>
            <th>Salary</th> {/* New Salary Column */}
            <th>Designation</th> {/* New Designation Column */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.courses.join(", ")}</td>
              <td>{user.date}</td>
              <td>{user.city}</td>
              <td>{user.salary}</td> {/* Display Salary */}
              <td>{user.designation}</td> {/* Display Designation */}
              <td>
                <button
                  className="action-button delete-button"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
                <Link
                  to={`/edit-user/${user.id}`}
                  className="action-button edit-button"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
