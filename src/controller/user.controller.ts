import { Request, Response } from "express";
import { createUser, userLogin } from "../services/user.service";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";

const parseUserData = (userData: any) => {
  return {
    id: userData.id,
    data_criacao: userData.createdAt,
    data_atualizacao: userData.updatedAt,
    ultimo_login: userData.lastLogin,
  };
};

const create = async (req: Request, res: Response) => {
  const userData = req.body;

  const newUser = await createUser(userData);

  const parsedUser = parseUserData(newUser);

  return res.status(201).json(parsedUser);
};

const login = async (req: Request, res: Response) => {
  const token = await userLogin(req.body);

  const userRepository = AppDataSource.getRepository(User);

  const currentUser = await userRepository.findOne({
    where: { email: req.body.email },
  });

  currentUser!.lastLogin = new Date();

  const parsedUser = parseUserData(currentUser);

  return res.status(200).json({ ...parsedUser, token });
};

export default { create, login };
