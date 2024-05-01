import EXPERIENCE from "../../../utils/constants/experience";
import Experience from "./experienceItem/Experience";

import styles from "./experienceListStyle.module.css";

export default function ExperienceList() {
    return (
        <div className={`section_global_container`}>
            <ul className={styles.list}>
                {EXPERIENCE.map((experience, index) => {
                    return <Experience key={index} experience={experience} />;
                })}
            </ul>
        </div>
    );
}
