import {
  MessageActionRow,
  MessageSelectMenu,
  SelectMenuInteraction,
} from "discord.js";
import { getUserData } from "../modules/getUserData";
import { updateUserData } from "../modules/updateUserData";
import { preferredLocation } from "../utils/constants";

export const onContributorWorkType = async (
  interaction: SelectMenuInteraction
) => {
  var user = await getUserData(interaction.user.id);
  user.preferredLocation = interaction.values[0];
  await updateUserData(user);

  try {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("contrubitorPreferredLocation")
        .setPlaceholder("Nothing selected")
        .addOptions(preferredLocation)
    );
    await interaction.reply({
      content: `Where would you like to work from?`,
      components: [row],
    });
  } catch (e) {
    interaction.followUp("You did not enter any input!");
  }
};
