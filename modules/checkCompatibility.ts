import { MessageEmbed, SelectMenuInteraction, User } from "discord.js";
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

      var projectEmbed = getProjectOwnerEmbed(contributorUser);
      var dm = await interaction.user.createDM();
      dm?.send({
        embeds: [projectEmbed],
      });

      // Send DM to project owner
      var projectDM = await projectUser.createDM();
      var contributorEmbed = getContributorEmbed(projectUser);
      projectDM?.send({
        embeds: [contributorEmbed],
      });
    }
  });
  interaction.channel?.send("Test");
};

const getProjectOwnerEmbed = (user: User) => {
  const embed = new MessageEmbed();
  embed.setTitle(
    `Congratulations!! ${user} has matched all the criteria mentioned by you`
  );
  embed.setDescription(
    `Here is someone you are looking for!!\nYou can contact ${user} if you want to proceed 😉.`
  );
  embed.setColor("#00FFFF");
  embed.type = "rich";
  embed.fields = [
    {
      name: `Project`,
      value: `Test Project`,
      inline: false,
    },
    {
      name: `Contact Email`,
      value: `viral@gmail.com`,
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

const getContributorEmbed = (user: User) => {
  const embed = new MessageEmbed();
  embed.setTitle(
    `Congratulations!! You have matched all the criteria mentioned by ${user}.`
  );
  embed.setDescription(
    "You can contact the Project recruiter and start the conversation."
  );
  embed.setColor("#00FFFF");
  embed.type = "rich";
  embed.fields = [
    {
      name: `Project`,
      value: `Test Project`,
      inline: false,
    },
    {
      name: `Contact Email`,
      value: `viral@gmail.com`,
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
