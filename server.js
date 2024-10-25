const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./configurations/config');
const errorHandler = require('./middlewares/errorHandler');
const cors = require("cors");
const path = require("path");
const connectDB = require('./db');

const EmployeeRouter = require('./Routes/Employee');
const MessageRouter = require('./Routes/Message');

connectDB();
app.use(express.json());
app.use(cors());
app.use(EmployeeRouter);
app.use(MessageRouter);
app.use(errorHandler);

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});

//http://localhost:8000