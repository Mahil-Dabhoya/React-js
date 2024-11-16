import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [courses, setCourses] = useState([]);  
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [record, setRecord] = useState([]);
  const navigate = useNavigate();
  let location = useLocation();

useEffect(() => {
    if (location.state) {
      setName(location.state.name || '');
      setEmail(location.state.email || '');
      setPassword(location.state.password || '');
      setGender(location.state.gender || '');
      setCourses(location.state.courses || []);  
      setDate(location.state.date || '');
      setStatus(location.state.status || '');
}
  
}, [location.state]);
  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    setCourses((prevCourses) =>
      checked ? [...prevCourses, value] : prevCourses.filter((course) => course !== value)
    );
};

useEffect(() => {
    let data = JSON.parse(localStorage.getItem('users')) || [];
    setRecord(data);
}, []);

const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !gender || !courses.length || !date || !status) {
      toast.error("All fields are required.");
      return false;
}

let updatedRecords = record.map((val) => {
      if (val.id === location.state.id) {
        val.name = name;
        val.email = email;
        val.password = password;
        val.gender = gender;
        val.courses = courses;
        val.date = date;
        val.status = status;
    }
    return val;
});

localStorage.setItem('users', JSON.stringify(updatedRecords));
    toast.success("User updated successfully!");

    setName('');
    setEmail('');
    setPassword('');
    setGender('');
    setCourses([]);
    setDate('');
    setStatus('');
    navigate('/view');
};

  return (
    
    <div>
      <Header />
      <h2 align="center" className='' style={{textAlign:"center" , width:"20%" ,fontSize:"25px",color:"#333003" , fontWeight:"600" , padding:'20px 40px', borderRadius:"10px 20px 10px 20px", boxShadow:"4px 4px 1px #345643" , margin:"15px auto 5px "}}>Update User</h2>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto mt-4  p-4 mb-3 " style={{borderRadius:"10px 20px 10px 20px", boxShadow:"4px 4px 1px #345643"}}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} value={name} />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
              </div>

              <div className="mb-3">
                <label className="form-label">Gender</label>
                <div>
                  <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="male" className="form-label" style={{ marginLeft: '10px' }}> Male</label><br />
                  <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="female" className="form-label" style={{ marginLeft: '10px' }}> Female</label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Course</label>
                <div>
                  {[' Html ', ' css ', ' bootstrap ', ' Js ', ' react.js ', ' node.js ', ' php ', ' angular ', ' python ', ' laravel '].map((course) => (
                    <div key={course} style={{ display: 'inline-block', marginRight: '10px' }}>
                      <input
                        type="checkbox"
                        value={course}
                        onChange={handleCourseChange}
                        checked={courses.includes(course)}  
                      />
                      <label style={{ marginLeft: '5px' }}>{course}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label><br />
                <input type="date" id="date" className="form-control" onChange={(e) => setDate(e.target.value)} value={date} />
              </div>

              <div className="mb-3">
                <label htmlFor="status" className="form-label">Select status</label><br />
                <select id="status" className="form-select" onChange={(e) => setStatus(e.target.value)} value={status}>
                  <option value="">--- Select ---</option>
                  <option value="active">Active</option>
                  <option value="unactive">Deactive</option>
                </select>
              </div>

              <button type="submit" className="btn d-block mx-auto mt-4" style={{textAlign:"center" , width:"20%" ,fontSize:"25px",color:"#333003" , fontWeight:"600" , padding:'10px 10px', borderRadius:"10px 20px 10px 20px", boxShadow:"4px 4px 1px #345643" , margin:"0 auto 0px" , outline:"none"}}>Update</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Edit;