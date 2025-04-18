import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
// Create an instance of the Express app
const app = express();
// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["Set-Cookie"],
  })
);
// Middleware to parse incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());




app.get("/data" ,(req ,res)=>{
  res.json({data:"hkdsagdhsa"})
})

import userRouter from "./routes/user.route.js";
import messageRouter from "./routes/message.route.js";
import followRouter from "./routes/follow.route.js";
// Mounting the imported routes on specific API endpoints
app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/follow", followRouter);

export { app };
