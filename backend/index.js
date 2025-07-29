import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:3001",
  credentials: true
}));

app.use(cookieParser());
import router from "./routes/user/routes.js";
import AdminRouter from "./routes/admin/admin.js"
import Product_router from './routes/data/products.js';
import connectDB from './mongodb/db.js';









await connectDB();
app.use("/api/user" , router);
app.use("/api/admin",AdminRouter);
app.use("/api/products",Product_router)

















app.listen(3000,(req,res)=>{
    console.log("Server is Running ")
})