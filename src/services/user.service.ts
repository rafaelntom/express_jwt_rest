import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors/errors";
import { TUserPayload } from "../schemas/user.schema";

const createUser = async (payload: TUserPayload) => {
  const userRepo = AppDataSource.getRepository(User);

  const verifyUserEmail = await userRepo.findOne({
    where: {
      email: payload.email,
    },
  });

  if (verifyUserEmail) {
    throw new AppError("E-mail já existente");
  } else {
    const newUser = userRepo.create(payload);
    await userRepo.save(newUser);
  }
};

export { createUser };
