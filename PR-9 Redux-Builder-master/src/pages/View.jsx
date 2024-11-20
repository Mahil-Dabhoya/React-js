import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_USER } from '../Action/Crud';

const View = () => {
  const record = useSelector(state => state.crud.users);
  const dispatch = useDispatch();

  return (
    <div className='container py-5'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {record.map((val) => (
          <div key={val.id} className="col">
            <div className="card border-warning">
              <div className="card-body pt-5">
                <h5 className="card-title">{val.name}</h5>
                <p className="card-title">{val.phone}</p>
                <button className="btn btn-danger" onClick={() => dispatch(DELETE_USER(val.id))}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default View;
