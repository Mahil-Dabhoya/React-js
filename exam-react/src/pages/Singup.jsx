import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // State for success message
  const [isSuccess, setIsSuccess] = useState(false); // Tracks success state
  const navigate = useNavigate();

  // Effect to handle redirection after successful sign-up
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        navigate("/add-user"); // Redirect after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }
  }, [isSuccess, navigate]);

  const handleSignUp = () => {
    if (username.trim() && password.trim()) {
      // Save user details to localStorage (for simplicity)
      localStorage.setItem("user", JSON.stringify({ username, password }));
      // Display success message and set success state
      setMessage("Sign-up successful! Redirecting to your To-Do list...");
      setIsSuccess(true);
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>Sign Up</h1>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
      </div>
      <button onClick={handleSignUp} style={{ padding: "10px 20px", cursor: "pointer" }}>
        Sign Up
      </button>
      {message && <p style={{ marginTop: "20px", color: "green" }}>{message}</p>}
    </div>
  );
};

export default SignUp;
