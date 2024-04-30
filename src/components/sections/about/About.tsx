import SkillList from "../skills/SkillList";
import styles from "./aboutStyles.module.css";

export default function About() {
    return (
        <div className={`${styles.container} section_global`}>
            <span className={`primary text-secondary ${styles.span}`}>Hi, my name is</span>
            <h1 className={styles.name}>George Alfred Cabaccang.</h1>
            <p className="text-tertiary">
                During the pandemic, I found myself with a lot of time on my hands, so I decided to
                learn how to build websites. Now, I'm really into it, and I'm enjoying the process
                of creating and improving my skills. It's been a rewarding way to make the most of a
                challenging situation. So, here we are. . .
            </p>
            <SkillList />
        </div>
    );
}
