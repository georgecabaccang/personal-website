import { ReactNode } from "react";

import styles from "./projectStyles.module.css";

export default function ProjectDescription({ children }: { children: ReactNode }) {
    return <div className={styles.description}>{children}</div>;
}
