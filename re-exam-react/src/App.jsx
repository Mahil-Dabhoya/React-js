import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import AddUser from "./pages/AddUser";
import UserList from "./pages/UserList";

function App() {
  const [users, setUsers] = useState(() => {
    // Initialize users from local storage or fallback to an empty array
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  // Sync users state to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => setUsers([...users, user]);

  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<UserList users={users} deleteUser={deleteUser} />}
        />
        <Route
          path="/add-user"
          element={<AddUser addUser={addUser} />}
        />
        <Route
          path="/edit-user/:id"
          element={<AddUser users={users} updateUser={updateUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
