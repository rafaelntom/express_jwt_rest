import "dotenv/config";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/errors";
import { TLoginPayload, TUserPayload } from "../schemas/user.schema";
import * as bcrypt from "bcryptjs";
import { sign } from "jsonwebtoken";

const createUser = async (payload: TUserPayload) => {
  const userRepository = AppDataSource.getRepository(User);

  const verifyUserEmail = await userRepository.findOne({
    where: {
      email: payload.email,
    },
  });

  if (verifyUserEmail) {
    throw new AppError("E-mail já existente", 409);
  } else {
    const newUser = userRepository.create(payload);
    await userRepository.save(newUser);

    return newUser;
  }
};

const userLogin = async (payload: TLoginPayload) => {
  const { email, password } = payload;

  const userRepository = AppDataSource.getRepository(User);
  const currentUser = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (!currentUser) {
    throw new AppError("Usuário e/ou senha inválidos!", 401);
  }

  const validatePassword: boolean = await bcrypt.compare(
    password,
    currentUser.password
  );

  if (!validatePassword) {
    throw new AppError("Usuário e/ou senha inválidos!", 401);
  }

  const token = sign(
    {
      email: currentUser.email,
      userId: currentUser.id,
    },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "30m",
      subject: String(currentUser.id),
    }
  );

  return token;
};

export { createUser, userLogin };
