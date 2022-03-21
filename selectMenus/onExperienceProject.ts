import {
  MessageActionRow,
  MessageSelectMenu,
  SelectMenuInteraction,
} from "discord.js";
import { getProjectUserData } from "../modules/getProjectUser";
import { updateProjectUserData } from "../modules/updateProjectUserData";
import { experienceRangeList } from "../utils/constants";

export const onExperienceProject = async (
  interaction: SelectMenuInteraction
) => {
  var user = await getProjectUserData(interaction.user.id);
  user.role = interaction.values[0];
  await updateProjectUserData(user);

  try {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("experienceRange")
        .setPlaceholder("Nothing selected")
        .addOptions(experienceRangeList)
    );
    await interaction.reply({
      content: `How much experience do you need for the new Role?`,
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
