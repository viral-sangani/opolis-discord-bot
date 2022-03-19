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
    await interaction.deferReply();
    var user = await getUserData(discordUser.id);

    const filter = (m: any) => discordUser.id === m.author.id;
    await interaction.editReply("What is your name?");
    try {
      var messages = await acceptReply(interaction, filter);
      user.name = messages?.first()?.content ?? "";
    } catch (e) {
      interaction.followUp("You did not enter any input!");
    }

    interaction.followUp(`Nice to meet you ${user.name}. What is your email?`);
    try {
      messages = await acceptReply(interaction, filter);
      user.email = messages?.first()?.content ?? "";
    } catch (e) {
      interaction.followUp("You did not enter any input!");
    }

    interaction.followUp(`Thanks. What is your Github Username?`);
    try {
      messages = await acceptReply(interaction, filter);
      user.githubUsername = messages?.first()?.content ?? "";
    } catch (e) {
      interaction.followUp("You did not enter any input!");
    }

    interaction.followUp(`Great. What is your Website/Portfolio site?`);
    try {
      messages = await acceptReply(interaction, filter);
      user.website = messages?.first()?.content ?? "";
    } catch (e) {
      interaction.followUp("You did not enter any input!");
    }

    interaction.followUp(`Awesome. What is your Twitter handler?`);
    try {
      messages = await acceptReply(interaction, filter);
      user.twitter = messages?.first()?.content ?? "";
    } catch (e) {
      interaction.followUp("You did not enter any input!");
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
      });
    } catch (e) {
      interaction.followUp("You did not enter any input!");
    }
  },
};

export const acceptReply = async (
  interaction: CommandInteraction,
  filter: (m: any) => boolean
) => {
  var messages = await interaction.channel?.awaitMessages({
    filter,
    time: 10000,
    max: 1,
    errors: ["time"],
  });
  return messages;
};
