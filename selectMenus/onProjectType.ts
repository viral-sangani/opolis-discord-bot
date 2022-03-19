import {
  MessageActionRow,
  MessageSelectMenu,
  SelectMenuInteraction,
} from "discord.js";
import { getProjectUserData } from "../modules/getProjectUser";
import { updateProjectUserData } from "../modules/updateProjectUserData";
import { preferredLocation } from "../utils/constants";

export const onProjectType = async (interaction: SelectMenuInteraction) => {
  var user = await getProjectUserData(interaction.user.id);
  user.projectType = interaction.values[0];
  await updateProjectUserData(user);

  try {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("projectPreferredLocation")
        .setPlaceholder("Nothing selected")
        .addOptions(preferredLocation)
    );
    await interaction.reply({
      content: `What is your preferred work location?`,
      components: [row],
    });
  } catch (e) {
    interaction.reply("You did not enter any input!");
  }
};