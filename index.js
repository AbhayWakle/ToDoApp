//activate server
const express = require("express")
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000; // if port 3000 not availabe then run on port 4000

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./routes/todos");
//mount the todo api's routes
app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT} `)
})

const dbConnect = require("./config/database");
dbConnect();

// app.get("/",(req,res)=>{
//     res.send(`<h1>This is Homepage  </h1>`)
// })