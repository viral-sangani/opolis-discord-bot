import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import { Client } from "discord.js";
import { CommandList } from "../commands/commandList";

export const onReady = async (BOT: Client) => {
  const rest = new REST({ version: "9" }).setToken(
    process.env.BOT_TOKEN as string
  );

  const commandData = CommandList.map((command) => command.data.toJSON());

  await rest.put(
    Routes.applicationGuildCommands(
      BOT.user?.id || "missing id",
      process.env.DISCORD_GUILD_ID as string
    ),
    { body: commandData }
  );

  console.log("Discord ready!");
};
