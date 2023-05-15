const express = require("express");
const chats = require("./data/data.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const {errorHandler, notFound} = require('./middleware/errorMiddleware')
dotenv.config();
// connectDB is function to connect to mongoDB
connectDB();
const app = express();
//express.json() method convert incoming data to json format
app.use(express.json());

app.use('/api/users',userRoutes)
app.use(notFound)
app.use(errorHandler)

const Port = process.env.PORT|| 3000;

app.listen(Port,()=>{console.log(`app is listening on ${Port}`);});
