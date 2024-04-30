import { ReactNode } from "react";
import styles from "./projectStyles.module.css";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectTechs from "./ProjectTechs";
import ProjectImage from "./ProjectImage";

export default function Project({ children }: { children: ReactNode }) {
    return <div className={styles.project}>{children}</div>;
}

Project.Title = ProjectTitle;
Project.Description = ProjectDescription;
Project.Techs = ProjectTechs;
Project.Image = ProjectImage;
