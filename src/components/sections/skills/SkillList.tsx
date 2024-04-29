import Skill from "./skillItem/Skill";

import styles from "./skillListStyles.module.css";

const SKILLS = ["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Java", "Spring Boot"];

export default function SkillList() {
    return (
        <div className={styles.container}>
            <span className="text-tertiary">Technogolies I've been using recently:</span>
            <ul className={styles.list}>
                {SKILLS.map((skill, index) => {
                    return (
                        <li className={styles.list_item}>
                            <Skill key={index} skill={skill} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
