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
    var user = await getProjectUserData(discordUser.id);

    if (
      user.hasSubmitted &&
      user.lastUpdatedAt &&
      user.lastUpdatedAt + 1000 * 60 * 60 * 6 > Date.now()
    ) {
      interaction.followUp({
        content:
          "You have already submitted your data! You can only edit your data once every 6 hours.",
        ephemeral: true,
      });
      return;
    } else {
      const filter = (m: any) => discordUser.id === m.author.id;
      await interaction.reply({
        content: "What is your name?",
        ephemeral: true,
      });
      try {
        var messages = await acceptReply(interaction, filter);
        messages?.first()?.delete();
        user.name = messages?.first()?.content ?? "";
      } catch (e) {
        interaction.followUp({
          content: "You did not enter any input!",
          ephemeral: true,
        });
      }

      interaction.followUp({
        content: `Nice to meet you ${user.name}. What is your email?`,
        ephemeral: true,
      });
      try {
        messages = await acceptReply(interaction, filter);
        messages?.first()?.delete();
        user.email = messages?.first()?.content ?? "";
      } catch (e) {
        interaction.followUp({
          content: "You did not enter any input!",
          ephemeral: true,
        });
      }

      interaction.followUp({
        content: `Great. What is your Project/Company's name?`,
        ephemeral: true,
      });
      try {
        messages = await acceptReply(interaction, filter);
        messages?.first()?.delete();
        user.companyName = messages?.first()?.content ?? "";
      } catch (e) {
        interaction.followUp({
          content: "You did not enter any input!",
          ephemeral: true,
        });
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
          ephemeral: true,
        });
      } catch (e) {
        interaction.followUp({
          content: "You did not enter any input!",
          ephemeral: true,
        });
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
    time: 1000 * 60 * 10,
    max: 1,
    errors: ["time"],
  });
  return messages;
};
