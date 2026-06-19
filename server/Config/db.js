import mongoose from "mongoose";

const connectDB = async () => {
    try{
       await mongoose.connect(process.env.MONGO_URI);

       console.log("MongoDB Connceted!!")
    }catch(err) {
       console.log('err', err);
       process.exit(1);
    }
}

export default connectDB;