import express from "express";
import dotenv from "dotenv";


import {userRouter } from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 6000;


app.use("/users", userRouter);


app.listen(PORT, () => {
    console.log("Server is running on", PORT)
}) 