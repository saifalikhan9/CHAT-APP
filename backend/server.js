const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const http = require("http");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const User = require("./models/usermodel");
const { log } = require("console");
const cors = require('cors');
const server = http.createServer(app);
const { chats } = require("./data/data")
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
const { errorHandler, notfound } = require("./middelwares/errorhandler")
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
connectDB();

app.use(cors({
  origin: "http://localhost:5173", // Allow requests from frontend
}));
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("SERVER WORKING");
});

app.use('/api/users', userRoutes);

app.use(notfound);
app.use(errorHandler);
