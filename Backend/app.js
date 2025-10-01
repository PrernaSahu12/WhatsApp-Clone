const express = require("express")
const authRoutes = require("./routes/authRoutes")
const cookieParser = require("cookie-parser")
const userRoutes = require("./routes/userRoutes");


const app = express()

app.use(express.json())

app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes);

app.get("/",(req,res)=>{
    res.send("WhatsApp clone backend running")
})


module.exports = app;