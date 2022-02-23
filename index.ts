// Require the necessary discord.js classes
import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
import { connectDatabase } from "./database/connectDatabase";
import { onInteraction } from "./events/onInteraction";

dotenv.config();
(async () => {
  if (!process.env.BOT_TOKEN) {
    throw new Error("Please set the BOT_TOKEN environment variable.");
  }

  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

  client.once("ready", () => {
    console.log("Ready!");
  });

  client.on("interactionCreate", async (interaction) => {
    await onInteraction(interaction);
  });

  await connectDatabase();
  await client.login(process.env.BOT_TOKEN);
})();