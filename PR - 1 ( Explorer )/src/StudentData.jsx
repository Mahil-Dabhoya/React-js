import React, { Component } from 'react';
import './StudentData.css'; 

class Record extends Component {
  render() {
    const { name, email, password, course, city } = this.props.data;
    return (
      <div className="card">
        <div className="card-header">
          <h2>Student Data</h2>
        </div>
        <div className="card-body">
          <p>Name :- {name}</p>
          <p>Email:- {email}</p>
          <p>Password :- {password}</p>
          <p>City :- {city}</p>
          <p>Courses :- </p>
          <ul>
            {course.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [
        {
          grid: 1,
          name: 'Kishan',
          email: 'kishan@gmail.com',
          password: 'kishan@123',
          course: ['HTML', 'CSS', 'Bootstrap', 'JS'],
          city: 'Surat',
        },
        {
          grid: 2,
          name: 'Jay',
          email: 'jay@gmail.com',
          password: 'kishan@123',
          course: ['Photoshop', 'Figma', 'Illustrator', 'Adobe XD'],
          city: 'Rajkot',
        },
        {
          grid: 3,
          name: 'Ajay',
          email: 'ajay@gmail.com',
          password: 'ajay@123',
          course: ['HTML', 'CSS', 'Bootstrap', 'NodeJS'],
          city: 'Amareli',
        },
        {
          grid: 4,
          name: 'Nisha',
          email: 'nisha@gmail.com',
          password: 'nisha@123',
          course: ['HTML', 'CSS', 'Bootstrap', 'Python'],
          city: 'Vadodara',
        },
      ],
    };
  }

  render() {
    return (
      <div className="container">
        <h1 align="center">Student Records</h1>
        <div className="card-container">
          {this.state.records.map((record, index) => (
            <Record key={index} data={record} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
