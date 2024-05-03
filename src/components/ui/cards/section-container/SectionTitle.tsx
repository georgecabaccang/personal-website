import { ReactNode } from "react";

import styles from "./sectionCard.module.css";

export default function SectionTitle({ children }: { children: ReactNode }) {
    return <span className={styles.section__title}>{children}</span>;
}
