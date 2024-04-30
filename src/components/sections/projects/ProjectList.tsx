import Movies from "../../../assets/thumbnails/movies-website.png";
import Ecommerce from "../../../assets/thumbnails/ecommerce-website.png";
import MatchingGame from "../../../assets/thumbnails/matching-game-thumbnail.png";
import WeatherForecast from "../../../assets/thumbnails/weatherForecast.png";
import Project from "./projectItem/Project";

import styles from "./projectList.module.css";

const PROJECTS = {
    web: [
        {
            id: 1,
            title: "Movie List Website",
            techs: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
            thumbnail: Movies,
            link: "https://front-movie-list.vercel.app/",
            description:
                "A basic add-a-movie-watched tracker website utilizing a database without authentication. Users can submit movies they've watched via a form, and the database stores movie information, including titles and watched dates. The website provides a convenient way for users to maintain a personal record of their movie-watching experiences.",
        },
        {
            id: 2,
            title: "e-Commerce Website",
            techs: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
            thumbnail: Ecommerce,
            link: "https://fronte-commerce.vercel.app/",
            description:
                "An e-commerce website featuring user authentication and a robust database. It allows customers to create accounts, log in and navigating around the website securely with tokens. The database efficiently stores product listings, customer information, and order history, ensuring seamless transactions and enhancing user satisfaction.",
        },
        {
            id: 3,
            title: "Simple Matching Game",
            techs: ["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "MongoDB"],
            thumbnail: MatchingGame,
            link: "https://matching-game-lovat.vercel.app/",
            description:
                "A responsive simple matching game with three modes and four grid sizes. This small game has a feature of saving your high score if you make the top ten for each mode and size.",
        },
        {
            id: 4,
            title: "Weather Forecast App",
            techs: ["JavaScript", "React", "Node.js", "Express.js", "MongoDB"],
            thumbnail: WeatherForecast,
            link: "https://weather-app-six-zeta-52.vercel.app/",
            description:
                "A weather app that uses Auth0 for authentication. Shows the weather forecast for the day at 9:00 AM through Open Weather Map's Apis.",
        },
    ],
    mobile: [
        {
            id: 1,
            title: "World Time",
            techs: "Flutter",
            thumbnail: WeatherForecast,
            link: "https://weather-app-six-zeta-52.vercel.app/",
            description:
                "A weather app that uses Auth0 for authentication. Shows the weather forecast for the day at 9:00 AM through Open Weather Map's Apis.",
        },
    ],
};

export default function ProjectList() {
    return (
        <div className={`section_global_container`}>
            <span className={styles.title}>Some things I've built:</span>
            <ul className={styles.list}>
                {PROJECTS.web.map((project, index) => {
                    return (
                        <Project key={index}>
                            <Project.Image>{project.thumbnail}</Project.Image>
                            <Project.Title>{project.title}</Project.Title>
                            <Project.Description>{project.description}</Project.Description>
                        </Project>
                    );
                })}
            </ul>
        </div>
    );
}
