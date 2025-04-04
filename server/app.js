import express from "express"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors";

import { connectDB } from "./config/MongoDb.js";
import authRoute from "./routes/authroutes.js";
import pinRoute from "./routes/pinroute.js";

config(); // dotenv config

try{

    connectDB();

}catch(err){
    console.log(`Mongo is not connected ❌ :: ${err}`);
    
}

const PORT  = process.env.PORT || 3000; //setup server port
const ClientUrl = process.env.FRONTEND_URL; // frontend url

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
    origin: (origin, callback) => {
      if (!origin || origin === ClientUrl) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
  }));
  

// config middlewares



app.use("/api/auth", authRoute);
app.use("/api/pin", pinRoute);

// apis endpoints

app.listen(PORT, (err)=>{
    if(err){
        console.warn(`Can't start server :: ${err}`);
    }
    console.log(`👉 Server 🌐 :: http://localhost:${PORT}`);    
})

