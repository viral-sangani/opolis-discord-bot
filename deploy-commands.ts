import { SlashCommandBuilder } from "@discordjs/builders";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import dotenv from "dotenv";

dotenv.config();

if (
  !process.env.DISCORD_APPLICATON_ID ||
  !process.env.DISCORD_GUILD_ID ||
  !process.env.BOT_TOKEN
) {
  throw new Error(
    "Please set the DISCORD_APPLICATON_ID, DISCORD_GUILD_ID, and BOT_TOKEN environment variables."
  );
}

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with user info!"),
].map((command) => command.toJSON());

const rest = new REST({ version: "9" }).setToken(process.env.BOT_TOKEN ?? "");

rest
  .put(
    Routes.applicationGuildCommands(
      process.env.DISCORD_APPLICATON_ID ?? "",
      process.env.DISCORD_GUILD_ID ?? ""
    ),
    { body: commands }
  )
  .then(() => console.log("Successfully registered application commands."))
  .catch(console.error);
