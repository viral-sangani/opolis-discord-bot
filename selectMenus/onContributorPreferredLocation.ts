import { SelectMenuInteraction } from "discord.js";
import { checkCompatibility } from "../modules/checkCompatibility";
import { getUserData } from "../modules/getUserData";
import { updateUserData } from "../modules/updateUserData";

export const onContributorPreferredLocation = async (
  interaction: SelectMenuInteraction
) => {
  var user = await getUserData(interaction.user.id);
  user.workType = interaction.values[0];
  await updateUserData(user);
  interaction.reply({
    content: "Last question! What is the last project you worked on?",
    ephemeral: true,
  });

  try {
    const filter = (m: any) => interaction.user.id === m.author.id;
    var messages = await interaction.channel?.awaitMessages({
      filter,
      time: 60000 * 10,
      max: 1,
      errors: ["time"],
    });
    messages?.first()?.delete();
    user.lastProjectWorkedOn = messages?.first()?.content ?? "";
    await updateUserData(user);
  } catch (e) {
    interaction.followUp({
      content: "You did not enter any input!",
      ephemeral: true,
    });
  }

  interaction.followUp({
    content:
      "That's all we need. You will find us in your DM when we find a match for you.",
    ephemeral: true,
  });
  await checkCompatibility(interaction, interaction.user.id);
  user.hasSubmitted = true;
  user.lastUpdatedAt = Date.now();
  await updateUserData(user);
};
