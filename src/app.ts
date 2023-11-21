import "express-async-errors";
import "reflect-metadata";
import express from "express";
import { userRouter } from "./routes/user.router";
import errorHandler from "./middlewares/errorHandler.middleware";

const app = express();
app.use(express.json());
app.use("/users", userRouter);

app.use(errorHandler);

export default app;
