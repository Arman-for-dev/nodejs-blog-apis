import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDatabase from "./config/db.js";


//App
const app = express();

//Database
connectDatabase();

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());


//Routes




//Start point
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});

