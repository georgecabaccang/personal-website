import Movies from "../../assets/thumbnails/movies-website.png";
import Ecommerce from "../../assets/thumbnails/ecommerce-website.png";
import MatchingGame from "../../assets/thumbnails/matching-game-thumbnail.png";
import WeatherForecast from "../../assets/thumbnails/weatherForecast.png";
import WorldTime from "../../assets/thumbnails/world-time.png";
import { MISC } from "./misc";

const PROJECTS = [
    {
        id: 1,
        title: "Movie List Website",
        techs: [
            MISC.technologies.js,
            MISC.technologies.react,
            MISC.technologies.node,
            MISC.technologies.express,
        ],
        thumbnail: Movies,
        link: "https://front-movie-list.vercel.app/",
        type: MISC.projectType.web,
        description:
            "A basic add-a-movie-watched tracker website utilizing a database without authentication. Users can submit movies they've watched via a form, and the database stores movie information, including titles and watched dates. The website provides a convenient way for users to maintain a personal record of their movie-watching experiences.",
    },
    {
        id: 2,
        title: "e-Commerce Website",
        techs: [
            MISC.technologies.js,
            MISC.technologies.ts,
            MISC.technologies.react,
            MISC.technologies.node,
            MISC.technologies.express,
        ],
        thumbnail: Ecommerce,
        type: MISC.projectType.web,
        link: "https://fronte-commerce.vercel.app/",
        description:
            "An e-commerce website featuring user authentication and a robust database. It allows customers to create accounts, log in and navigating around the website securely with tokens. The database efficiently stores product listings, customer information, and order history, ensuring seamless transactions and enhancing user satisfaction.",
    },
    {
        id: 3,
        title: "Simple Matching Game",
        techs: [
            MISC.technologies.js,
            MISC.technologies.ts,
            MISC.technologies.react,
            MISC.technologies.node,
            MISC.technologies.express,
        ],
        thumbnail: MatchingGame,
        type: MISC.projectType.web,
        link: "https://matching-game-lovat.vercel.app/",
        description:
            "A responsive simple matching game with three modes and four grid sizes. This small game has a feature of saving your high score if you make the top ten for each mode and size.",
    },
    {
        id: 4,
        title: "Weather Forecast App",
        techs: [MISC.technologies.js, MISC.technologies.ts, MISC.technologies.react],
        thumbnail: WeatherForecast,
        type: MISC.projectType.web,
        link: "https://weather-app-six-zeta-52.vercel.app/",
        description:
            "A weather app that uses Auth0 for authentication. Shows the weather forecast for the day at 9:00 AM using Open Weather Map's APIs",
    },
    {
        id: 5,
        title: "World Time",
        techs: [MISC.technologies.flutter],
        thumbnail: WorldTime,
        type: MISC.projectType.mobile,
        link: "https://drive.google.com/file/d/1S33xgX9b898PSNcx7tQVI_9YIGZFsMk6/view?usp=drive_link",
        description:
            "A simple app that can show you the time in another county. (Not all countries are available)",
    },
];

export default PROJECTS;
