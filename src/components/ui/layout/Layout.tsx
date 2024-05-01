import About from "../../sections/about/About";
import styles from "./layout.module.css";
import { Sections } from "../../../utils/SectionsEnum";
import ProjectList from "../../sections/projects/ProjectList";
import ExperienceList from "../../sections/experience/ExperienceList";
import ToolList from "../../sections/tools/ToolList";

const SECTIONS = [
    {
        name: Sections.ABOUT,
        component: <About />,
    },
    {
        name: Sections.PROJECTS,
        component: <ProjectList />,
    },
    {
        name: Sections.EXPERIENCE,
        component: <ExperienceList />,
    },
    {
        name: Sections.TOOLS,
        component: <ToolList />,
    },
];

export default function Layout() {
    function handleSectionStyle(sectionName: Sections, isBorder: boolean) {
        let sectionStyle;

        switch (sectionName) {
            case Sections.ABOUT:
                sectionStyle = isBorder ? styles.border_holder_one : styles.section_one;
                break;
            case Sections.PROJECTS:
                sectionStyle = isBorder ? styles.border_holder_two : styles.section_two;
                break;
            case Sections.EXPERIENCE:
                sectionStyle = isBorder ? styles.border_holder_three : styles.section_three;
                break;
            default:
                sectionStyle = isBorder ? styles.border_holder_four : styles.section_four;
                break;
        }

        return sectionStyle;
    }

    return (
        <div className={styles.parent}>
            <div>
                {SECTIONS.map((section, index) => {
                    return (
                        <div
                            key={index}
                            className={`${handleSectionStyle(section.name, true)}`}
                        ></div>
                    );
                })}
            </div>
            <div className={styles.container}>
                {SECTIONS.map((section, index) => {
                    return (
                        <div key={index} className={`${handleSectionStyle(section.name, false)}`}>
                            {section.component}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
