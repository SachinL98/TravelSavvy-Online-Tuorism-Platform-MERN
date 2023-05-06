const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors  = require('cors');
const userRoutes = require('./routes/users')
require("dotenv").config();

const port = process.env.PORT || 8000
const mongo_url = process.env.MONGO_URI;

app.use(cors());
app.use(bodyParser.json());

app.use(express.json())

app.use((req,res,next)=>{
    next()
})

//auth routes
app.use("/api/user", userRoutes);

mongoose.connect(mongo_url, {});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database Connection Successful");
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})