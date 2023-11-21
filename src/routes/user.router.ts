import { Router } from "express";
import validateRequestBody from "../middlewares/validadeRequestBody.middleware";
import { RequestBodySchema } from "../schemas/user.schema";

export const userRouter: Router = Router();

userRouter.post("/signup", validateRequestBody(RequestBodySchema));
