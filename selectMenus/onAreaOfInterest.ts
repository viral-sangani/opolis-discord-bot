import {
  MessageActionRow,
  MessageSelectMenu,
  SelectMenuInteraction,
} from "discord.js";
import { getUserData } from "../modules/getUserData";
import { updateUserData } from "../modules/updateUserData";
import { workType } from "../utils/constants";

export const onAreaOfInterest = async (interaction: SelectMenuInteraction) => {
  var user = await getUserData(interaction.user.id);
  user.areaOfInterest = interaction.values[0];
  await updateUserData(user);
  try {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("onContributorWorkType")
        .setPlaceholder("Nothing selected")
        .addOptions(workType)
    );
    await interaction.reply({
      content: `What kind of work are you looking for?`,
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
