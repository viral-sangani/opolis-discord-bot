import {
  MessageActionRow,
  MessageSelectMenu,
  SelectMenuInteraction,
} from "discord.js";
import { getUserData } from "../modules/getUserData";
import { updateUserData } from "../modules/updateUserData";
import { experienceInYearsList } from "../utils/constants";

export const onExperinece = async (interaction: SelectMenuInteraction) => {
  var user = await getUserData(interaction.user.id);
  user.experience = interaction.values[0];
  await updateUserData(user);

  try {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("yearsOfExperience")
        .setPlaceholder("Nothing selected")
        .addOptions(experienceInYearsList)
    );
    await interaction.reply({
      content: `How much experience do you have?`,
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
