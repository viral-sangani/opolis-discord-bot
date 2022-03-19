// Require the necessary discord.js classes

import { Client, Intents } from "discord.js";
import dotenv from "dotenv";
import express from "express";
import { connectDatabase } from "./database/connectDatabase";
import { onInteraction } from "./events/onInteraction";
import { onReady } from "./events/onReady";
var app = express();

dotenv.config();
(async () => {
  if (!process.env.BOT_TOKEN) {
    throw new Error("Please set the BOT_TOKEN environment variable.");
  }

  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  });

  client.on("ready", async () => await onReady(client));

  client.on("interactionCreate", async (interaction) => {
    await onInteraction(interaction);
  });

  await connectDatabase();
  await client.login(process.env.BOT_TOKEN);
})();

app.set("port", process.env.PORT || 8000);
app.use(express.static(__dirname + "/public"));

app.get("/", function (request, response) {
  response.send("Hello World!");
});

app.listen(app.get("port"), function () {
  console.log("Node app is running at localhost:" + app.get("port"));
});
