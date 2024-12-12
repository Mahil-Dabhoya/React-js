import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import AddUser from "./pages/AddUser";
import UserList from "./pages/UserList";
import SignUp from "./pages/Singup"; // Updated import to fix typo

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => setUsers([...users, user]);

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const deleteUser = (id) => setUsers(users.filter(user => user.id !== id));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserList users={users} deleteUser={deleteUser} />} />
        <Route path="/add-user" element={<AddUser addUser={addUser} />} />
        <Route path="/edit-user/:id" element={<AddUser users={users} updateUser={updateUser} />} />
        <Route path="/signup" element={<SignUp />} /> {/* Added SignUp Route */}
      </Routes>
    </Router>
  );
}

export default App;
