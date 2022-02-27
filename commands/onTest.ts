import { SlashCommandBuilder } from "@discordjs/builders";
import { Command } from "../interface/Command";

export const onTest: Command = {
  data: new SlashCommandBuilder()
    .setName("test-dm")
    .setDescription(
      "Start a survey and we will help you meet the right people to work with."
    ),
  run: async (interaction) => {
    const { user: discordUser } = interaction;
    var dm = await interaction.guild?.members.cache
      .get(discordUser.id)
      ?.user.createDM();
    dm?.send("Test 123");
  },
};
