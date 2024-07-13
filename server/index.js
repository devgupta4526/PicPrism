const express = require("express");
const dotenv = require("dotenv");
const { readdirSync } = require("fs");
const cors = require("cors");

const app = express();
dotenv.config();

const connectDB = require("./db/connection");
const port = process.env.PORT || 3000;

// Middleware setup
app.use(cors());
app.use(express.json());

// Database connection
connectDB();

// Routes setup
readdirSync("./routes").map((route) => {
    app.use("/api", require(`./routes/${route}`));
});

// Basic route
app.get("/", (req, res) => {
    res.send("Hello");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is started!!!! Port : ${port}`);
});
