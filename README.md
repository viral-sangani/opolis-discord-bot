<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Opolis Discord Bot</h3>

  <p align="center">
    FUTURE OF FINDING WORK
    <br />
    <a href="https://discord.gg/5SsXnDDneV"><strong>Join the Discord Server </strong></a><strong>to Test Opolis Discord BOT</strong>
    <br />
    <a href="https://github.com/viral-sangani/opolis-discord-bot/issues">Report Bug</a>
    ·
    <a href="https://github.com/viral-sangani/opolis-discord-bot/issues">Request Feature</a>
  </p>
</div>

![Poster](/assets/Opolis-Discord-Bot.png)

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The above project opolis-discord-bot has been developed as a submission for ETH Denver Hackathon under the category - Opolis (Future of Finding Work). Hence, as mentioned in the requisites of this respective bounty it is an open-source Discord bot that collects information from "contributors" and "recruiters".
Information that gets collected from a "contributor":

  1. Contributor's name and email.
  2. His/ Her GitHub username, website and Twitter handler.
  3. Type of experience ("Dev", "Community", "Marketing", "Product", "Ops").
  4. Years of experience ( "1 year", "2 years", "3 years" , "more than 3 years").
  5. Area of interest ("DAOs", "DeFi", "NFTs", "Public Goods", "Metaverse").
  6. Last project worked on.
  7. Preferred Location ("Remote", "Asia", "Canada", "Europe", "India", "United Kingdom", "United States").
  8. Work Type ("Full Time", "Part Time", "Contract", "Freelance", "Internship").
  9. A contributor can only update his information after 6 hours of time so as to avoid any brute force attack.

Information that gets collected  from a "recruiter":

  1. Recruiter's name, email and his company's name.
  2. What kind of role he/she is looking for ("Dev", "Community", "Marketing", "Product", "Ops").
  3. What is the experience range he/she is expecting ("1-3" years, "3-5" years, "5-7" years, "7-10" years, "10-12" years, "12-15" years, "15+")
  4. Project type ("DAOs", "DeFi", "NFTs", "Public Goods", "Metaverse").
  5. Preferred Location ("Remote", "Asia", "Canada", "Europe", "India", "United Kingdom", "United States").
  6. Work Type ("Full Time", "Part Time", "Contract", "Freelance", "Internship").

And where there's a match 51% of these items, making the connect between the contributor and project via a private DM between the two candidates.

- User's messages are deleted once a user replied back to the bot for privacy reasons.
- **All the data is store in MongoDB, which allows us to persist the data. Project recruiters can post multiple requirements for multiple positions and contributors can apply for any one of the position.**
- _Note that one can only change/update their information every 6 hours. This can be easily configured in the backend for the user's convenience._

## (All the conversations with BOT are private and only user can see that texts. This feature is implemented after creating [Demo video](https://www.canva.com/design/DAE7kTSa3uI/Y76-wqQo6Qd1TowWZobSPg/watch))

## Demo Images

![Demo Image](/assets//demo-image-1.png)

![Demo Image](/assets//demo-image-2.png)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [DiscordJS](https://discord.js.org/#/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Love ❤️](https://c.tenor.com/U45Q8YaJzBUAAAAC/moti-hearts.gif)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Nodejs (14.x or higher)
- yarn
- Discord Developer Account
- MongoDB Account
- Heroku to deploy the BOT

- Follow the steps here to create your bot - [https://discordpy.readthedocs.io/en/stable/discord.html](https://discordpy.readthedocs.io/en/stable/discord.html)
- Follow this steps to get your Guild ID - [https://poshbot.readthedocs.io/en/latest/guides/backends/setup-discord-backend/#find-your-guild-id-server-id](https://poshbot.readthedocs.io/en/latest/guides/backends/setup-discord-backend/#find-your-guild-id-server-id)
- Copy `.env-example` to `.env` and add necessary values.
- Create account on heroku and connect with Github account

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/viral-sangani/opolis-discord-bot
   ```

2. Install NPM packages

   ```sh
   yarn
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

1. Start the Server

   ```sh
   yarn start
   ```

2. Install your bot from Discord Developer portal in your discord server.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Viral Sangani - [@viral_sangani](https://twitter.com/viral_sangani_) - viral.sangani2011@gmail.com

Devanshi Garg - devanshigarg08@gmail.com

Project Link: [https://github.com/viral-sangani/opolis-discord-bot](https://github.com/viral-sangani/opolis-discord-bot)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

List of resources I find helpful and would like to give credit to.

- [Opolis.co](https://opolis.co)
- [DiscordJS](https://discord.js.org/#/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/viral-sangani/opolis-discord-bot.svg?style=for-the-badge
[contributors-url]: https://github.com/viral-sangani/opolis-discord-bot/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/viral-sangani/opolis-discord-bot.svg?style=for-the-badge
[forks-url]: https://github.com/viral-sangani/opolis-discord-bot/network/members
[stars-shield]: https://img.shields.io/github/stars/viral-sangani/opolis-discord-bot.svg?style=for-the-badge
[stars-url]: https://github.com/viral-sangani/opolis-discord-bot/stargazers
[issues-shield]: https://img.shields.io/github/issues/viral-sangani/opolis-discord-bot.svg?style=for-the-badge
[issues-url]: https://github.com/viral-sangani/opolis-discord-bot/issues
[license-shield]: https://img.shields.io/github/license/viral-sangani/opolis-discord-bot.svg?style=for-the-badge
[license-url]: https://github.com/viral-sangani/opolis-discord-bot/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/viral-sangani/
[product-screenshot]: assets/learn-dao-banner.png
