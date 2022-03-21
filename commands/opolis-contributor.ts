import { SlashCommandBuilder } from "@discordjs/builders";
import {
  CommandInteraction,
  MessageActionRow,
  MessageSelectMenu,
} from "discord.js";
import { Command } from "../interface/Command";
import { getUserData } from "../modules/getUserData";
import { updateUserData } from "../modules/updateUserData";
import { experienceList } from "../utils/constants";

export const onOpolisContributor: Command = {
  data: new SlashCommandBuilder()
    .setName("opolis-contributor")
    .setDescription(
      "Start a survey and we will help you meet the right people to work with."
    ),
  run: async (interaction) => {
    const { user: discordUser } = interaction;
    // await interaction.deferReply();
    var user = await getUserData(discordUser.id);

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
        // delete the message
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
        content: `Thanks. What is your Github Username?`,
        ephemeral: true,
      });
      try {
        messages = await acceptReply(interaction, filter);
        messages?.first()?.delete();
        user.githubUsername = messages?.first()?.content ?? "";
      } catch (e) {
        interaction.followUp({
          content: "You did not enter any input!",
          ephemeral: true,
        });
      }

      interaction.followUp({
        content: `Great. What is your Website/Portfolio site?`,
        ephemeral: true,
      });
      try {
        messages = await acceptReply(interaction, filter);
        messages?.first()?.delete();
        user.website = messages?.first()?.content ?? "";
      } catch (e) {
        interaction.followUp({
          content: "You did not enter any input!",
          ephemeral: true,
        });
      }

      interaction.followUp({
        content: `Awesome. What is your Twitter handler?`,
        ephemeral: true,
      });
      try {
        messages = await acceptReply(interaction, filter);
        messages?.first()?.delete();
        user.twitter = messages?.first()?.content ?? "";
      } catch (e) {
        interaction.followUp({
          content: "You did not enter any input!",
          ephemeral: true,
        });
      }

      await updateUserData(user);

      try {
        const row = new MessageActionRow().addComponents(
          new MessageSelectMenu()
            .setCustomId("experience")
            .setPlaceholder("Nothing selected")
            .addOptions(experienceList)
        );
        await interaction.followUp({
          content: `Great! I need few more information from you. What type of experience do you have?`,
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
