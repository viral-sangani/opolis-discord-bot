import { ProjectUserInt } from "./../database/models/projectUser";

export const updateProjectUserData = async (user: ProjectUserInt) => {
  await user.save();
  return user;
};
