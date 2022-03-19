import {
  MessageActionRow,
  MessageSelectMenu,
  SelectMenuInteraction,
} from "discord.js";
import { getProjectUserData } from "../modules/getProjectUser";
import { updateProjectUserData } from "../modules/updateProjectUserData";
import { workType } from "../utils/constants";

export const onProjectPreferredLocation = async (
  interaction: SelectMenuInteraction
) => {
  var user = await getProjectUserData(interaction.user.id);
  user.preferredLocation = interaction.values[0];
  await updateProjectUserData(user);

  try {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("projectWorkType")
        .setPlaceholder("Nothing selected")
        .addOptions(workType)
    );
    await interaction.reply({
      content: `What kind of work role is this?`,
      components: [row],
    });
  } catch (e) {
    interaction.followUp("You did not enter any input!");
  }
};
