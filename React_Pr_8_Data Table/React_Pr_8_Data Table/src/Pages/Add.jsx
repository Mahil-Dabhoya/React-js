import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [courses, setCourses] = useState([]);
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');
  const [record, setRecord] = useState([])
  const navigate = useNavigate()
  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    setCourses((prevCourses) =>
      checked ? [...prevCourses, value] : prevCourses.filter((course) => course !== value)
    );
  };

useEffect(() => {
    let data = JSON.parse(localStorage.getItem('users')) || []
    setRecord(data);
}, [])

const handleSubmit = (e) => {
  e.preventDefault();

    if (!name || !email || !password || !gender || !courses || !date || !status) {
      toast.error("All fill resuired..");
      return false
}

let obj = {
      id: Math.floor(Math.random() * 10000),
      name,
      email,
      password,
      gender,
      courses,
      date,
      status,
}

let newrecord = [...record, obj];
    localStorage.setItem('users', JSON.stringify(newrecord));
    toast.success("user Add sucessfully...");
    setName('')
    setEmail('');
    setCourses('');
    setDate('');
    setGender('');
    setPassword('');
    setStatus('')
    navigate('/view');
};

  return (
    <div>
      <Header />
      <h2 align="center" className='mt-5' style={{textAlign:"center", width:"20%" ,color:"#333003" , fontWeight:"600" , padding:'20px 40px', borderRadius:"10px 20px 10px 20px", boxShadow:"4px 4px 1px #345643" , margin:"auto"}}>Add User</h2>

      <div className="container ">
        <div className="row">
          <div className="col-lg-8 mx-auto mt-4 p-4 mb-5" style={{ border: "2px solid transparent", borderRadius: "10px 20px 10px 20px", boxShadow: "5px 5px 2px #777764" }}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name :  </label>
                <input type="text" className="form-control" id="name" onChange={(e) => setName(e.target.value)} value={name} />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address :   </label>
                <input type="email" className="form-control" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password :  </label>
                <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
              </div>

              <div className="mb-3">                
                <div>
                <label className="form-label">Gender :  &nbsp;&nbsp;</label>
                  <input type="radio" id="male" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="male" className="form-label" style={{ marginLeft: '10px' }}> Male &nbsp;&nbsp;</label>
                  <input type="radio" id="female" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
                  <label htmlFor="female" className="form-label" style={{ marginLeft: '10px' }}> Female</label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Course :  </label>
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
                <label htmlFor="date" className="form-label">Date :  </label><br />
                <input type="date" id="date" className="form-control" onChange={(e) => setDate(e.target.value)} value={date} />
              </div>

              <div className="mb-3">
                <label htmlFor="status" className="form-label">Select status :  </label><br />
                <select id="status" className="form-select" onChange={(e) => setStatus(e.target.value)} value={status}>
                  <option value="">--- Selected ---</option>
                  <option value="active">Active</option>
                  <option value="unactive">Deactive</option>
                </select>
              </div>

              <button type="submit" className="btn d-block mx-auto mt-4 " style={{textAlign:"center" , width:"20%" ,fontSize:"25px",color:"#333003" , fontWeight:"600" , padding:'10px 10px', borderRadius:"10px 20px 10px 20px", boxShadow:"4px 4px 1px #345643" , margin:"0 auto 0px" , outline:"none"}}>Submit</button>
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
        transition:Bounce
      />
    </div>
  );
};

export default Add;