import { Router } from "express";
import validateRequestBody from "../middlewares/validadeRequestBody.middleware";
import { RequestBodySchema } from "../schemas/user.schema";
import { userController } from "../controller";

export const userRouter: Router = Router();

userRouter.post(
  "/signup",
  validateRequestBody(RequestBodySchema),
  userController.create
);
