import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://food:Anishpradhan7350@cluster0.0p78t.mongodb.net/food').then(()=>console.log("db connected"))

}



//mongodb+srv://food:<db_password>@cluster0.0p78t.mongodb.net/?