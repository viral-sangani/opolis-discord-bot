import {
  MessageActionRow,
  MessageSelectMenu,
  SelectMenuInteraction,
} from "discord.js";
import { getProjectUserData } from "../modules/getProjectUser";
import { updateProjectUserData } from "../modules/updateProjectUserData";
import { projectType } from "../utils/constants";

export const onExperienceRangeProject = async (
  interaction: SelectMenuInteraction
) => {
  var user = await getProjectUserData(interaction.user.id);
  user.experienceRange = interaction.values[0];
  await updateProjectUserData(user);

  try {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("projectType")
        .setPlaceholder("Nothing selected")
        .addOptions(projectType)
    );
    await interaction.reply({
      content: `What is your project about?`,
      components: [row],
      ephemeral: true,
    });
  } catch (e) {
    interaction.followUp({
      content: "You did not enter any input!",
      ephemeral: true,
    });
  }
};
