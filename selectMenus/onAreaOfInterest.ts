import { SelectMenuInteraction } from "discord.js";
import { checkCompatibility } from "../modules/checkCompatibility";
import { getUserData } from "../modules/getUserData";
import { updateUserData } from "../modules/updateUserData";

export const onAreaOfInterest = async (interaction: SelectMenuInteraction) => {
  var user = await getUserData(interaction.user.id);
  user.areaOfInterest = interaction.values[0];
  await updateUserData(user);
  interaction.reply("Last question! What is the last project you worked on?");

  try {
    const filter = (m: any) => interaction.user.id === m.author.id;
    var messages = await interaction.channel?.awaitMessages({
      filter,
      time: 60000 * 10,
      max: 1,
      errors: ["time"],
    });
    user.lastProjectWorkedOn = messages?.first()?.content ?? "";
    await updateUserData(user);
    await checkCompatibility(interaction);
  } catch (e) {
    interaction.followUp("You did not enter any input!");
  }
};
