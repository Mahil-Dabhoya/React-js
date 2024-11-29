import { collection, deleteDoc, doc, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../firebase';

const Table = () => {
  const navigate = useNavigate();
  const db = getFirestore(app);

  const [record, setRecord] = useState([]);

  const getUser = async () => {
    try {
      const data = collection(db, 'users');
      const users = await getDocs(data);
      const record = users.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecord(record);
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = async (id) => {
    try {
      let deletedata = doc(db, `users/${id}`);
      await deleteDoc(deletedata);
      alert('Record deleted');
      getUser();
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', marginTop: '20px' }}>
      <h2 style={{ background: '#333', color: '#fff', padding: '10px', borderRadius: '5px' }}>User List</h2>
      <table
        style={{
          width: '80%',
          margin: '20px auto',
          borderCollapse: 'collapse',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <thead>
          <tr style={{ background: '#333', color: '#fff', height: '40px' }}>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Phone</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {record.map((val) => {
            const { id, name, phone } = val;
            return (
              <tr key={id} style={{ textAlign: 'center', borderBottom: '1px solid #ddd' }}>
                <td style={tableCellStyle}>{id}</td>
                <td style={tableCellStyle}>{name}</td>
                <td style={tableCellStyle}>{phone}</td>
                <td style={tableCellStyle}>
                  <button
                    onClick={() => deleteUser(id)}
                    style={{
                      background: '#ff0000',
                      color: '#fff',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      marginRight: '5px',
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => navigate('/edit', { state: val })}
                    style={{
                      background: '#007bff',
                      color: '#fff',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link
        to={`/add`}
        style={{
          display: 'inline-block',
          marginTop: '20px',
          textDecoration: 'none',
          background: '#333',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
        }}
      >
        Add User
      </Link>
    </div>
  );
};

const tableHeaderStyle = {
  textAlign: 'center',
  padding: '10px',
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '10px',
  textAlign: 'center',
  borderBottom: '1px solid #ddd',
};

export default Table;
