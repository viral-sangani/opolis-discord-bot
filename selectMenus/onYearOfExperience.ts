import {
  MessageActionRow,
  MessageSelectMenu,
  SelectMenuInteraction,
} from "discord.js";
import { getUserData } from "../modules/getUserData";
import { updateUserData } from "../modules/updateUserData";
import { areaOfInterest } from "../utils/constants";

export const onYearOfExperience = async (
  interaction: SelectMenuInteraction
) => {
  var user = await getUserData(interaction.user.id);

  user.yearsOfExperience = parseInt(interaction.values[0]);
  await updateUserData(user);

  try {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("areaOfInterest")
        .setPlaceholder("Nothing selected")
        .addOptions(areaOfInterest)
    );
    await interaction.reply({
      content: `What is your area of interest?`,
      components: [row],
    });
  } catch (e) {
    interaction.followUp("You did not enter any input!");
  }
};
