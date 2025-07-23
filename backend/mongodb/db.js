import mongoose  from "mongoose";


const connectDB = async ()=>{

    try{

         await mongoose.connect("mongodb://localhost:27017/Ecommerce",{
            useNewUrlParser: true,
           useUnifiedTopology: true,
         });
         console.log("MongoDB connected");



    }
    catch(er){
        console.log("MongoDB connection issue ");
        process.exit(1);
    }

   

}

export default connectDB;