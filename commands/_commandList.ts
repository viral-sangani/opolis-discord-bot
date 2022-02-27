import { Command } from "../interface/Command";
import { onTest } from "./onTest";
import { onOpolisContributor } from "./opolis-contributor";
import { onOpolisProject } from "./opolis-project";

export const CommandList: Command[] = [
  onOpolisContributor,
  onOpolisProject,
  onTest,
];
