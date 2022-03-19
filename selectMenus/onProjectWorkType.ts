import { SelectMenuInteraction } from "discord.js";
import { getProjectUserData } from "../modules/getProjectUser";
import { updateProjectUserData } from "../modules/updateProjectUserData";

export const onProjectWorkType = async (interaction: SelectMenuInteraction) => {
  var user = await getProjectUserData(interaction.user.id);
  user.workType = interaction.values[0];
  await updateProjectUserData(user);

  interaction.reply(
    "That's all we need. You will find us in your DM when we find a match for you."
  );
  user.hasSubmitted = true;
  user.lastUpdatedAt = Date.now();
  await updateProjectUserData(user);
};
