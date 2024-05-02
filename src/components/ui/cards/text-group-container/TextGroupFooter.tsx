import { ReactNode } from "react";

import styles from "./textGroup.module.css";

export default function TextGroupFooter({ children }: { children: ReactNode }) {
    return <div className={styles.text_group__footer}>{children}</div>;
}
