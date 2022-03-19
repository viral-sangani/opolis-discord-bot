import { MessageEmbed, SelectMenuInteraction, User } from "discord.js";
import { ProjectUserInt } from "../database/models/projectUser";
import { UserInt } from "../database/models/user";
import { getProjectUsersData } from "./getProjectUsers";
import { getUserData } from "./getUserData";

export const checkCompatibility = async (
  interaction: SelectMenuInteraction,
  contributorDiscordId: string
) => {
  var projectUsers = await getProjectUsersData();

  var contributor = await getUserData(contributorDiscordId);
  var totalAttrToMatch = ["role", "experience", "category"];

  projectUsers.forEach(async (project) => {
    var matched = 0;
    totalAttrToMatch.forEach((attr, index) => {
      if (attr == "role" && project.role == contributor.experience) {
        matched++;
      } else if (attr == "experience") {
        var experienceVals = project.experienceRange.split("-");
        if (
          contributor.yearsOfExperience >= parseInt(experienceVals[0]) &&
          contributor.yearsOfExperience <= parseInt(experienceVals[1])
        ) {
          matched++;
        }
      } else if (
        attr == "category" &&
        project.projectType == contributor.areaOfInterest
      ) {
        matched++;
      }
    });
    // check if user has matched 51% of more
    if ((matched / totalAttrToMatch.length) * 100 >= 51) {
      var projectUser = await interaction.client.users.fetch(project.discordId);
      var contributorUser = await interaction.client.users.fetch(
        contributor.discordId
      );
      var dm = await interaction.user.createDM();
      var projectDM = await projectUser.createDM();
      var contributorEmbed = getContributorEmbed(projectUser, project);
      var projectEmbed = getProjectOwnerEmbed(contributorUser, contributor);

      // Send DM to project owner
      await projectDM?.send({
        content: `Congratulations!! ${contributorUser} has matched 51% of the criteria mentioned by you`,
        embeds: [projectEmbed],
      });

      await dm?.send({
        content: `Congratulations!! You have matched 51% of the criteria mentioned by ${projectUser}.`,
        embeds: [contributorEmbed],
      });
    }
  });
};

const getProjectOwnerEmbed = (user: User, userObj: UserInt) => {
  const embed = new MessageEmbed();
  embed.setTitle(`Here is someone you are looking for!!`);
  embed.setDescription(`You can contact ${user} if you want to proceed 😉.`);
  embed.setColor("#00FFFF");
  embed.fields = [
    {
      name: `Name`,
      value: `${userObj.name}`,
      inline: false,
    },
    {
      name: `Link for the website`,
      value: `${userObj.website}`,
      inline: false,
    },
    {
      name: `GitHub Profile`,
      value: userObj.githubUsername.includes("http")
        ? userObj.githubUsername
        : `https://github.com/${userObj.githubUsername}`,
      inline: false,
    },
    {
      name: `Twitter Profile`,
      value: userObj.twitter.includes("http")
        ? userObj.twitter
        : `https://twitter.com/${userObj.twitter}`,
      inline: false,
    },
    {
      name: `Email Address`,
      value: userObj.email,
      inline: false,
    },
    {
      name: `Years of experience`,
      value: userObj.yearsOfExperience.toString(),
      inline: false,
    },
    {
      name: `About last Project`,
      value: userObj.lastProjectWorkedOn,
      inline: false,
    },
    {
      name: `Preferred work location`,
      value: userObj.preferredLocation,
      inline: false,
    },
    {
      name: `Work type`,
      value: userObj.workType,
      inline: false,
    },
  ];
  embed.image = {
    url: imageList[Math.floor(Math.random() * imageList.length)],
    height: 0,
    width: 0,
  };
  embed.thumbnail = {
    url: `https://media.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif`,
    height: 0,
    width: 0,
  };
  return embed;
};

const getContributorEmbed = (user: User, userObj: ProjectUserInt) => {
  const embed = new MessageEmbed();
  embed.setTitle(`Willing to work with ${user.username}?`);
  embed.setDescription(`You can contact ${user} for further details 😉`);
  embed.setColor("#00FFFF");
  embed.fields = [
    {
      name: `Project Name`,
      value: userObj.companyName ?? "N/A",
      inline: false,
    },
    {
      name: `Name`,
      value: userObj.name ?? "N/A",
      inline: false,
    },
    {
      name: `Email`,
      value: userObj.email ?? "N/A",
      inline: false,
    },
  ];
  embed.image = {
    url: imageList[Math.floor(Math.random() * imageList.length)],
    height: 0,
    width: 0,
  };
  embed.thumbnail = {
    url: `https://media.giphy.com/media/BPJmthQ3YRwD6QqcVD/giphy.gif`,
    height: 0,
    width: 0,
  };
  return embed;
};

const imageList = [
  "https://media.giphy.com/media/l2QE4Dep73Evk8OHK/giphy.gif",
  "https://media.giphy.com/media/NZMLHf7gYhlC0/giphy.gif",
  "https://media.giphy.com/media/JRE9OKBGiSdqg/giphy.gif",
  "https://media.giphy.com/media/YnBntKOgnUSBkV7bQH/giphy.gif",
  "https://media.giphy.com/media/DhstvI3zZ598Nb1rFf/giphy.gif",
  "https://media.giphy.com/media/5GoVLqeAOo6PK/giphy.gif",
];
