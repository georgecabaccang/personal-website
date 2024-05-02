import Arrow from "../../../../assets/svg/Arrow";

import styles from "./skillStyles.module.css";

export default function Skill({ skill }: { skill: string }) {
    return (
        <div className={styles.skill_container}>
            <div className={`${styles.arrow}`}>
                <Arrow />
            </div>
            <span className={`list_item_body sub_body_text`}>{skill}</span>
        </div>
    );
}
