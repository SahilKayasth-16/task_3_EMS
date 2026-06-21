import React from "react";
import "../styles/EmployeeList.css";
import EmployeeCard from "./EmployeeCard";

function EmployeeList({employees, onEdit, onDelete}) {
    return(
        <div className="employee-grid">
            {employees.map((employee) => (
                <EmployeeCard key={employee._id} employee={employee} onEdit={onEdit} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default EmployeeList;