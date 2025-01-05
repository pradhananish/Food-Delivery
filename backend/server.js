import express from 'express'
import cors from "cors"
import { connectDB } from './config/db.js'

//app config
const app = express()
const port = 4000


//middleware
app.use(cors())
app.use(express.json())

//endpoints
connectDB();

app.get("/", (req,res)=>{
    res.send("API Woking")

})

app.listen(port, ()=>{
    console.log(`Server Started on http://localhost:${port}`)
})