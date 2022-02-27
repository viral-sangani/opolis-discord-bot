import ProjectUserModel, {
  ProjectUserInt,
} from "../database/models/projectUser";

export const getProjectUserData = async (
  id: string
): Promise<ProjectUserInt> => {
  const userData =
    (await ProjectUserModel.findOne({ id })) ||
    (await ProjectUserModel.create({
      discordId: id,
    }));
  return userData;
};
