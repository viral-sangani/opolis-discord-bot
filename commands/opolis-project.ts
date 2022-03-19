import { SlashCommandBuilder } from "@discordjs/builders";
import {
  CommandInteraction,
  MessageActionRow,
  MessageSelectMenu,
} from "discord.js";
import { Command } from "../interface/Command";
import { updateProjectUserData } from "../modules/updateProjectUserData";
import { experienceProjectList } from "../utils/constants";
import { getProjectUserData } from "./../modules/getProjectUser";

export const onOpolisProject: Command = {
  data: new SlashCommandBuilder()
    .setName("opolis-project")
    .setDescription(
      "Start a survey and we will help you meet the right people to work with."
    ),
  run: async (interaction) => {
    const { user: discordUser } = interaction;
    await interaction.deferReply();
    var user = await getProjectUserData(discordUser.id);

    if (
      user.hasSubmitted &&
      user.lastUpdatedAt &&
      user.lastUpdatedAt + 1000 * 60 * 60 * 6 > Date.now()
    ) {
      interaction.followUp(
        "You have already submitted your data! You can only edit your data once every 6 hours."
      );
      return;
    } else {
      const filter = (m: any) => discordUser.id === m.author.id;
      await interaction.editReply("What is your name?");
      try {
        var messages = await acceptReply(interaction, filter);
        user.name = messages?.first()?.content ?? "";
      } catch (e) {
        interaction.followUp("You did not enter any input!");
      }

      interaction.followUp(
        `Nice to meet you ${user.name}. What is your email?`
      );
      try {
        messages = await acceptReply(interaction, filter);
        user.email = messages?.first()?.content ?? "";
      } catch (e) {
        interaction.followUp("You did not enter any input!");
      }

      interaction.followUp(`Great. What is your Project/Company's name?`);
      try {
        messages = await acceptReply(interaction, filter);
        user.companyName = messages?.first()?.content ?? "";
      } catch (e) {
        interaction.followUp("You did not enter any input!");
      }

      await updateProjectUserData(user);

      try {
        const row = new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId("experienceProject")
            .setPlaceholder("Nothing selected")
            .addOptions(experienceProjectList)
        );
        await interaction.followUp({
          content: `Great! I need few more information from you. What role do you need for you project?`,
          components: [row],
        });
      } catch (e) {
        interaction.followUp("You did not enter any input!");
      }
    }
  },
};

export const acceptReply = async (
  interaction: CommandInteraction,
  filter: (m: any) => boolean
) => {
  var messages = await interaction.channel?.awaitMessages({
    filter,
    time: 1000 * 60 * 2,
    max: 1,
    errors: ["time"],
  });
  return messages;
};
