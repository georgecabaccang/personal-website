import styles from "./layout.module.css";

const ABOUT = "about";
const PROJECTS = "projects";
const EXPERIENCE = "experience";
const TOOLS = "tools";

const SECTIONS = [
    {
        name: ABOUT,
    },
    {
        name: PROJECTS,
    },
    {
        name: EXPERIENCE,
    },
    {
        name: TOOLS,
    },
];

export default function Layout() {
    function handleSectionStyle(sectionName: string, isBorder: boolean) {
        let sectionStyle;

        switch (sectionName) {
            case ABOUT:
                sectionStyle = isBorder ? styles.border_holder_one : styles.section_one;
                break;
            case PROJECTS:
                sectionStyle = isBorder ? styles.border_holder_two : styles.section_two;
                break;
            case EXPERIENCE:
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
                {SECTIONS.map((section) => {
                    return <div className={`${handleSectionStyle(section.name, true)}`}></div>;
                })}
            </div>
            <div className={styles.container}>
                {SECTIONS.map((section, index) => {
                    return (
                        <div key={index} className={`${handleSectionStyle(section.name, false)}`}>
                            <div>{section.name}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
