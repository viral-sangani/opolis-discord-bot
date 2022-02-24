import { UserInt } from "./../database/models/user";

export const updateUserData = async (user: UserInt) => {
  await user.save();
  return user;
};
