const Employee = require("../models/employee");

//======== CREATE EMPLOYEE ========//
const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);

        res.status(201).json(employee);
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//======== GET ALL EMPLOYEE ========//
const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//========= GET EMPLOYEE BY ID ========//
const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json(employee);
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//======== UPDATE EMPLOYEE ========//
const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found",
            });
        }

        res.status(200).json(employee);
    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//======== DELETE EMPLOYEE ========//
const deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);

        if (!employee) {
            return res.status(404).json({
                message: "Employee not found"
            });
        }

        res.status(200).json({
            message: "Employee Deleted Successfully."
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};