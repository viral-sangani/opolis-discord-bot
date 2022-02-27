import UserModel, { UserInt } from "../database/models/user";

export const getUserData = async (id: string): Promise<UserInt> => {
  const userData =
    (await UserModel.findOne({ id })) ||
    (await UserModel.create({
      discordId: id,
    }));
  return userData;
};
