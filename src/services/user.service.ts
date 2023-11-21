import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { TUserPayload } from "../schemas/user.schema";

export const createUser = async (payload: TUserPayload) => {
  const userRepo = AppDataSource.getRepository(User);
};
