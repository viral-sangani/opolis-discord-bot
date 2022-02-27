import { SelectMenuInteraction } from "discord.js";
import { getProjectUsersData } from "./getProjectUsers";

export const checkCompatibility = async (
  interaction: SelectMenuInteraction
) => {
  var projectUsers = await getProjectUsersData();
  interaction.channel?.send("Test");
};
