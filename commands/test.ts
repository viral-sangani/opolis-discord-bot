import { SlashCommandBuilder } from "@discordjs/builders";
import { MessageEmbed } from "discord.js";
import { Command } from "../interface/Command";
import { getUserData } from "./../modules/getUesrData";
import { updateUserData } from "./../modules/updateUserData";

export const onTest: Command = {
  data: new SlashCommandBuilder()
    .setName("100")
    .setDescription("Check in for the 100 Days of Code challenge.")
    .addStringOption((option) =>
      option
        .setName("message")
        .setDescription("The message to go in your 100 Days of Code update.")
        .setRequired(true)
    ),
  run: async (interaction) => {
    await interaction.deferReply();
    const { user } = interaction;
    const text = interaction.options.getString("message", true);

    const targetUser = await getUserData(user.id);
    const updatedUser = await updateUserData(targetUser);

    const testEmbed = new MessageEmbed();
    testEmbed.setTitle("This is a Test");
    testEmbed.setDescription(text);
    testEmbed.setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    });
    testEmbed.addField("TEST", "ABCD", true);
    testEmbed.setFooter({
      text: "Day completed: " + new Date().toLocaleDateString(),
    });
    await interaction.editReply({ embeds: [testEmbed] });
  },
};
