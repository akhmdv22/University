const express = require('express');
const mongoose = require('mongoose');
const app = express();
const config = require('./configurations/config');
const errorHandler = require('./middlewares/errorHandler');
const cors = require("cors");
const path = require("path");

const EmployeeRouter = require('./Routes/Employee');
const MessageRouter = require('./Routes/Message');

app.use(express.json());
app.use(cors());
app.use(EmployeeRouter);
app.use(MessageRouter);
app.use(errorHandler);

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname,'index.html'));
});

//Database
mongoose.connect(config.connectionString)
.then(()=> {
    console.log('MongoDB connected');
  app.listen(config.port, () => {
    console.log(`Server is running on port ` + config.port);
  });
})
.catch ((err)=> {
    console.error('MongoDB connection error:', err)
});

//http://localhost:8000