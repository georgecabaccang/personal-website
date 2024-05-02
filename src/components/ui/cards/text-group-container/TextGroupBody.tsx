import { ReactNode } from "react";

import styles from "./textGroup.module.css";

export default function TextGroupBody({ children }: { children: ReactNode }) {
    return <div className={styles.text_group__body}>{children}</div>;
}
