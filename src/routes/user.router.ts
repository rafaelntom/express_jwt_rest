import { Router } from "express";
import validateRequestBody from "../middlewares/validadeRequestBody.middleware";
import { LoginSchema, RequestBodySchema } from "../schemas/user.schema";
import { userController } from "../controller";
import validateToken from "../middlewares/validateToken.middleware";

export const userRouter: Router = Router();

userRouter.post(
  "/signup",
  validateRequestBody(RequestBodySchema),
  userController.create
);

userRouter.post(
  "/signin",
  validateRequestBody(LoginSchema),
  userController.login
);

userRouter.get("", validateToken, userController.retrieveUserInfo);
