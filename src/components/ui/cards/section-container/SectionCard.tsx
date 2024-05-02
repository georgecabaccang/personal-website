import { ReactNode } from "react";

import styles from "./sectionCard.module.css";

export default function SectionCard({ children }: { children: ReactNode }) {
    return <div className={styles.section_container}>{children}</div>;
}
