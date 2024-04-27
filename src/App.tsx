import { useState } from "react";
import About from "./components/sections/about/About";
import ProjectList from "./components/sections/projects/ProjectList";
import ExperienceList from "./components/sections/experience/ExperienceList";

export default function App() {
    const [section, setSection] = useState("about");
    const [disabled, setDisabled] = useState(false);

    function handleClick(section: String) {
        setDisabled(true);
        switch (section) {
            case "about":
                setSection("about");
                break;
            case "proj":
                setSection("proj");
                break;
            default:
                setSection("exp");
                break;
        }
        setTimeout(() => setDisabled(false), 300);
    }

    return (
        <>
            <button onClick={() => (!disabled ? handleClick("about") : null)}>About</button>
            <button onClick={() => (!disabled ? handleClick("proj") : null)}>Projects</button>
            <button onClick={() => (!disabled ? handleClick("exp") : null)}>Experience</button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <About section={section} />
                <ProjectList section={section} />
                <ExperienceList section={section} />
            </div>
        </>
    );
}
