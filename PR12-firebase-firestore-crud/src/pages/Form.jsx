import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebase';

const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const db = getFirestore(app);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (todo.trim() === '') {
      alert('Please add a task!');
      return;
    }

    try {
      await addDoc(collection(db, 'todos'), { text: todo });
      setTodos([...todos, todo]); // Update local state
      setTodo(''); // Clear input
      alert('Todo added successfully!');
      navigate('/');
    } catch (err) {
      console.error('Error adding todo:', err);
    }
  };

  const handleRemove = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div align="center" style={{ marginTop: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ background: '#333', color: '#fff', padding: '10px', borderRadius: '5px' }}>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          style={{ padding: '10px', width: '60%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 20px', marginLeft: '5px', background: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px', width: '50%', textAlign: 'left' }}>
        {todos.map((item, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px',
              background: '#f9f9f9',
              marginBottom: '5px',
              borderRadius: '5px',
              border: '1px solid #ddd',
            }}
          >
            {item}
            <button
              onClick={() => handleRemove(index)}
              style={{
                background: '#ff0000',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 10px',
                cursor: 'pointer',
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <Link
        to={`/`}
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
        View All
      </Link>
    </div>
  );
};

export default TodoForm;
