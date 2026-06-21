import React from "react";
import "../styles/EmployeeCard.css";

function EmployeeCard({employee, onEdit, onDelete}) {
    return(
        <div className="card">
            <h3>{employee.name}</h3>

            <p>
                <strong>Role:</strong>{" "}
                {employee.role}
            </p>
            <p>
                <strong>Department:</strong>{" "}
                {employee.department}
            </p>
            <p>
                <strong>Salary:</strong>{" "}
                {employee.salary}
            </p>
            <p>
                <strong>Email:</strong>{" "}
                {employee.email}
            </p>
            <p>
                <strong>Phone:</strong>{" "}
                {employee.phone}
            </p>

            <div className="btn-group">
                <button onClick={() => onEdit(employee)}>Edit</button>
                <button onClick={() => onDelete(employee._id)}>Delete</button>
            </div>
        </div>
    );
};

export default EmployeeCard;