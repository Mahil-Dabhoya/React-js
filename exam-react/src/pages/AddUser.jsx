import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./AddUser.css";

const AddUser = ({ addUser, updateUser, users }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    courses: [],
    date: "",
    city: "",
    status: "",
  });

  useEffect(() => {
    if (id) {
      const userToEdit = users.find((user) => user.id === parseInt(id));
      if (userToEdit) setForm(userToEdit);
    } else {
      setForm({
        name: "",
        email: "",
        password: "",
        gender: "",
        courses: [],
        date: "",
        city: "",
        status: "",
      });
    }
  }, [id, users]);

  useEffect(() => {
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      console.error("Invalid email address");
    }
  }, [form.email]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prevState) => ({
        ...prevState,
        courses: checked
          ? [...prevState.courses, value]
          : prevState.courses.filter((course) => course !== value),
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateUser({ ...form, id: parseInt(id) });
    } else {
      addUser({ ...form, id: Date.now() });
    }
    navigate("/");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">{id ? "Edit User" : "Add User"}</h2>
      <div className="form-group">
        <input
          className="form-input"
          name="name"
          placeholder="Enter Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          className="form-input"
          name="email"
          placeholder="Enter Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          className="form-input"
          name="password"
          type="password"
          placeholder="Enter Your Password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label className="form-radio">
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={form.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label className="form-radio">
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={form.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </label>
      </div>
      <div className="form-group courses-group">
        {["Reading", "Runing", "Danceing", "Playing"].map((course) => (
          <label key={course} className="form-checkbox">
            <input
              type="checkbox"
              name="courses"
              value={course}
              checked={form.courses.includes(course)}
              onChange={handleChange}
            />
            {course}
          </label>
        ))}
      </div>
      <div className="form-group">
        <input
          className="form-input"
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <select
          className="form-select"
          name="city"
          value={form.city}
          onChange={handleChange}
        >
          <option value="">---Select City---</option>
          <option>Surat</option>
          <option>Vadodr</option>
          <option>Bhavnagar</option>
          <option>Rajkot</option>
        </select>
      </div>
      <button className="form-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddUser;
