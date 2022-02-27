import { Interaction } from "discord.js";
import { CommandList } from "../commands/_commandList";
import { onExperinece } from "../selectMenus/onExperience";
import { onExperienceProject } from "../selectMenus/onExperienceProject";
import { onExperienceRangeProject } from "../selectMenus/onExperienceRange";
import { onProjectType } from "../selectMenus/onProjectType";
import { onYearOfExperience } from "../selectMenus/onYearOfExperience";
import { onAreaOfInterest } from "./../selectMenus/onAreaOfInterest";

export const onInteraction = async (interaction: Interaction) => {
  if (interaction.isCommand()) {
    for (const command of CommandList) {
      if (interaction.commandName === command.data.name) {
        await command.run(interaction);
        break;
      }
    }
  } else if (interaction.isSelectMenu()) {
    const selectMenu = interaction.customId;
    if (selectMenu === "experience") {
      onExperinece(interaction);
    } else if (selectMenu === "yearsOfExperience") {
      onYearOfExperience(interaction);
    } else if (selectMenu === "areaOfInterest") {
      onAreaOfInterest(interaction);
    } else if (selectMenu === "experienceProject") {
      onExperienceProject(interaction);
    } else if (selectMenu === "experienceRange") {
      onExperienceRangeProject(interaction);
    } else if (selectMenu === "projectType") {
      onProjectType(interaction);
    }
  }
};
