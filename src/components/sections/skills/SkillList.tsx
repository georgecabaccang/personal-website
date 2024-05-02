import TextGroup from "../../ui/cards/text-group-container/TextGroup";
import Skill from "./skillItem/Skill";

import styles from "./skillListStyles.module.css";

const SKILLS = ["JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Java", "Spring Boot"];

export default function SkillList() {
    return (
        <TextGroup>
            <TextGroup.Header>
                <span>Technogolies I've been using recently:</span>
            </TextGroup.Header>

            <TextGroup.Body>
                <ul className={styles.list}>
                    {SKILLS.map((skill, index) => {
                        return (
                            <li key={index} className={styles.list_item}>
                                <Skill skill={skill} />
                            </li>
                        );
                    })}
                </ul>
            </TextGroup.Body>
        </TextGroup>
    );
}
