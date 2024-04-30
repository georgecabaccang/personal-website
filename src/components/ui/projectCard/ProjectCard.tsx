import { ReactNode } from "react";
import styles from "./projectCard.module.css";
import ProjectTitle from "./ProjectTitle";

export default function ProjectCard({ children }: { children: ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}

ProjectCard.Title = ProjectTitle;
