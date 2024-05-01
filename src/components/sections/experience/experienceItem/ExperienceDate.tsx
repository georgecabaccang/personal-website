import { ReactNode } from "react";

import styles from "./experienceItemStyle.module.css";

export default function ExperienceDate({ children }: { children: ReactNode }) {
    return <div className={styles.experience_date}>{children}</div>;
}
