const express = require("express")
const dotenv = require("dotenv")
const {readdirSync} = require("fs")

const app = express()
const authRoute = require("./routes/auth.route")
const connectDB = require("./db/connection")

dotenv.config()

const port = process.env.PORT || 3000;

connectDB()

readdirSync("./routes").map((route)=>{
    app.use("/api",require(`./routes/${route}`))
})

app.get("/", (req,res) =>{
    res.send("Hello");
})





app.listen(port,() =>{
    console.log(`Server is started!!!! Port : ${port}`);
})