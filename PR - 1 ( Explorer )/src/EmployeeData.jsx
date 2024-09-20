import React from "react";
import "./EmployeeData.css";

const EmployeeCard = (props) => {
    const { employee } = props;

    return (
        <div className="employee-card">
            <div className="employee-header">
                <h3>Employee Data </h3>
            </div>
            <div className="card-body">
                <p>Name :-  {employee.empname}</p>
                <p>Emp ID :-  {employee.empid}</p>
                <p>Email :-  {employee.empemail}</p>
                <p>Phone :-  {employee.empphone}</p>
                <p>Address :-  {employee.empaddress.area}, {employee.empaddress.city}, {employee.empaddress.state}, {employee.empaddress.country}</p>
                <p>Designation :-  {employee.empdeg}</p>
                <p>Salary :-  {employee.empsalary}</p>
                <p>Department :-  {employee.empdepartment}</p>
            </div>

        </div>
    );
};

const EmployeeList = (props) => {
    const { employees } = props;

    return (
        <div className="employee-list">
            {employees.map((employee, index) => (
                <EmployeeCard key={index} employee={employee} />
            ))}
        </div>
    );
};

function App() {
    const employees = [
        {
            empid: 1,
            empname: "abc",
            empemail: "abc@gmail.com",
            empphone: 12345,
            empaddress: {
                country: "India",
                state: "Gujarat",
                city: "Surat",
                area: "Motavarachha",
            },
            empdeg: "Junior",
            empsalary: 23000,
            empdepartment: "UI/UX",
        },
        {
            empid: 2,
            empname: "def",
            empemail: "def@gmail.com",
            empphone: 2121,
            empaddress: {
                country: "India",
                state: "Rajasthan",
                city: "Jaipur",
                area: "Jaipurabc",
            },
            empdeg: "Junior",
            empsalary: 21000,
            empdepartment: "Web Design",
        },
        {
            empid: 3,
            empname: "ghi",
            empemail: "ghi@gmail.com",
            empphone: 2212,
            empaddress: {
                country: "India",
                state: "Maharashtra",
                city: "Pune",
                area: "abcpune",
            },
            empdeg: "Senior",
            empsalary: 65000,
            empdepartment: "Backend Developer",
        },
        {
            empid: 4,
            empname: "jkl",
            empemail: "jkl@gmail.com",
            empphone: 212112,
            empaddress: {
                country: "India",
                state: "Karnataka",
                city: "Bengaluru",
                area: "KGF",
            },
            empdeg: "TL",
            empsalary: 150000,
            empdepartment: "Frontend Developer",
        },
    ];

    return (
        <div className="App">
            <h1>Employee Details</h1>
            <EmployeeList employees={employees} />
        </div>
    );
}

export default App;
