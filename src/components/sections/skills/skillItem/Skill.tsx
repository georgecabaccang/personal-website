import Arrow from "../../../../assets/svg/Arrow";

import styles from "./skillStyles.module.css";

export default function Skill({ skill }: { skill: string }) {
    return (
        <div className={styles.container}>
            <div className={`${styles.arrow}`}>
                <Arrow />
            </div>
            <span className={`text-tertiary ${styles.text}`}>{skill}</span>
        </div>
    );
}
