import express, { urlencoded } from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/configDB.js";
import authRoutes from "./routes/authroutes.js";

// cofig dotenv
config();

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));


connectDB();

app.use("/api/auth", authRoutes);

app.get("/", (req, res)=>{
    res.send("Hwllo");
});

app.listen(PORT, (error)=>{
    if(error){
        console.log(`Error in running server :: ${error}`);
    }

    console.log(`Server started ✅`);    
})

