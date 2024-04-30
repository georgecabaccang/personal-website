import ProjectType from "../../../../types/ProjectType";
import ProjectCard from "../../../ui/projectCard/ProjectCard";

import styles from "./projectStyles.module.css";

export default function Project({ project }: { project: ProjectType }) {
    return (
        <div className={styles.project}>
            <ProjectCard>
                <ProjectCard.Title>{project.title}</ProjectCard.Title>
            </ProjectCard>
        </div>
    );
}
