import express from 'express'
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors());
import router from "./routes/user/routes.js";
import connectDB from './mongodb/db.js';









await connectDB();
app.use("/api/user" , router);
















app.listen(3000,(req,res)=>{
    console.log("Server is Running ")
})