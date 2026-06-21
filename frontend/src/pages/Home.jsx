import React, { useState, useEffect } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from "../services/employeeService";
import "../styles/Home.css";

function Home() {

    const [employees, setEmployees] = useState([]);
    const [ editingEmployee, setEditingEmployee ] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchEmployees = async () => {
        try {
            const res = await getEmployees();
            setEmployees(res.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const validateEmployee = (data) => {
        if (!data.name.trim()) {
            alert("Name is required");
            return false;
        }

        if (!data.role.trim()) {
            alert("Role is required");
            return false;
        }

        if (!data.department.trim()) {
            alert(
            "Department is required"
            );
            return false;
        }

        if (data.salary <= 0) {
            alert(
            "Salary must be positive"
            );
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(data.email)) {
            alert("Invalid Email");
            return false;
        }

        const phoneRegex = /^[0-9]{10}$/;

        if (!phoneRegex.test(data.phone)) {
            alert("Phone must be 10 digits");
            return false;
        }

        return true;
    };

    const handleSubmit = async (data) => {
        if (!validateEmployee(data)) return;

        try {
            if (editingEmployee) {
                await updateEmployee(editingEmployee._id,data);
                setEditingEmployee(null);
            } else {
            await createEmployee(data);
            }
            fetchEmployees();
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (employee) => {
        setEditingEmployee(employee);
    };

    const handleDelete = async (id) => {
        const confirmDelete =
            window.confirm("Delete this employee?");

        if (!confirmDelete) return;

        try {
            await deleteEmployee(id);
            fetchEmployees();
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return (
        <h2 className="loading">Loading Employees...</h2>
        );
    }

    return (
    <div className="app">
        <div className="home-container">
            <h1>Employee Management System</h1>

             <p className="subtitle">Manage employees with Add, Edit and Delete operations.</p>

            <EmployeeForm onSubmit={handleSubmit} editingEmployee={editingEmployee} />

            <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    </div>
  );
}

export default Home;