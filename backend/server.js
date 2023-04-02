const express = require("express");
const chats = require("./data/data.js");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config();

connectDB();
const app = express();
// console.log({app});
app.use(express.json())
// app.get("/", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   const SingleChat = chats.find((c) => c._id === req.params.id);
//   console.log(SingleChat);
//   res.send(SingleChat);
// });
app.use('/api/users',userRoutes)
const Port = process.env.PORT || 5000;
app.listen(Port);
