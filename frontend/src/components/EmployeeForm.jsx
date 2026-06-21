import React from "react";
import { useState, useEffect } from "react";
import "../styles/EmployeeForm.css";

function EmployeeForm({onSubmit, editingEmployee}) {
    const [formData, setFormData] = useState({
        name: "",
        role: "",
        department: "",
        salary: "",
        email: "",
        phone: "",
    });

    useEffect(() => {
        if (editingEmployee) {
            setFormData(editingEmployee);
        }
    }, [editingEmployee]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        onSubmit(formData);

        setFormData({
            name: "",
            role: "",
            department: "",
            salary: "",
            email: "",
            phone: ""
        });
    };

    return(
        <div>

            <form onSubmit={handleSubmit} className="form">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} />
                <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
                <input type="number" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />

                <button type="submit">
                    {editingEmployee ? "Update Employee" : "Add Employee"}
                </button>
            </form>
        </div>
    );
};

export default EmployeeForm;