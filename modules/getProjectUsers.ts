import ProjectUserModel, {
  ProjectUserInt,
} from "../database/models/projectUser";

export const getProjectUsersData = async (): Promise<ProjectUserInt[]> => {
  const userDatas = await ProjectUserModel.find({});
  return userDatas;
};
