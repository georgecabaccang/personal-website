import { ReactNode } from "react";

import styles from "./textGroup.module.css";

export default function TextGroupHeader({ children }: { children: ReactNode }) {
    return <div className={styles.text_group__header}>{children}</div>;
}
