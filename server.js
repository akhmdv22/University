const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
const path = require("path");
const cookieParser = require('cookie-parser');

const config = require('./configurations/config');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./db');

const EmployeeRouter = require('./Routes/Employee');
const MessageRouter = require('./Routes/Message');
const AdminAuthRouter = require('./Routes/AdminAuth');

connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(errorHandler);
app.use(cors());

app.use(AdminAuthRouter);
app.use(EmployeeRouter);
app.use(MessageRouter);

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

//http://localhost:8000