import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_user } from '../Action/Crud';

const Add = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Name is required');
      return;
    }

    let obj = {
      name,
      phone,
    };

    dispatch(ADD_user(obj));

    // Clear input fields
    setName('');
    setPhone('');
    setError('');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 ">
          <div className="card shadow">
            <div className="card-body ">
              <h5 className="card-title mb-4">Add User</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nameInput" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameInput"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phoneInput" className="form-label">Phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phoneInput"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-danger">{error}</p>}
                <button type="submit" className="btn btn-warning text-white w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
