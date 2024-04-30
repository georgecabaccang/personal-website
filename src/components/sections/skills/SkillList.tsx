import Skill from "./skillItem/Skill";

import styles from "./skillListStyles.module.css";

const SKILLS = ["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Java", "Spring Boot"];

export default function SkillList() {
    return (
        <div className={styles.container}>
            <span>Technogolies I've been using recently:</span>
            <ul className={styles.list}>
                {SKILLS.map((skill, index) => {
                    return (
                        <li key={index} className={styles.list_item}>
                            <Skill skill={skill} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
