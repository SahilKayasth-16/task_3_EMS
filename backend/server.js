const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db")
const employeeRoutes = require("./routes/employeeRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/employees", employeeRoutes);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(3002, () => {
    console.log("Server is created successfully & running properly.");
});