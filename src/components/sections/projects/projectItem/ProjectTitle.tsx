import { ReactNode } from "react";

import styles from "./projectStyles.module.css";

export default function ProjectTitle({ children }: { children: ReactNode }) {
    return <div className={styles.title}>{children}</div>;
}
