import { SelectMenuInteraction } from "discord.js";

export interface SelectMenu {
  customId: string;
  run: (interaction: SelectMenuInteraction) => Promise<void>;
}
