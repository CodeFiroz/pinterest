import express from "express"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors";

config(); // dotenv config

const PORT  = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors({
  "origin": ["http://localhost:5173"],
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}));

app.get("/", (req, res)=>{
    res.send("Hii from server");
})

app.listen(PORT, (err)=>{
    
    if(err){
        console.warn(`Can't start server :: ${err}`);
    }

    console.log(`👉 Server :: http://localhost:${PORT}`);
    
    
})

