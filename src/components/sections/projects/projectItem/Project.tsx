import styles from "./projectStyles.module.css";
import ProjectTitle from "./ProjectTitle";
import ProjectDescription from "./ProjectDescription";
import ProjectTechs from "./ProjectTechs";
import ProjectImage from "./ProjectImage";
import ProjectType from "../../../../types/ProjectType";

export default function Project({ project }: { project: ProjectType }) {
    return (
        <a href={project.link} target="_blank">
            <div className={styles.project}>
                <Project.Image thumbnail={project.thumbnail} type={project.type} />
                <div className={styles.text_group}>
                    <Project.Title>{project.title}</Project.Title>
                    <Project.Description>{project.description}</Project.Description>
                    <Project.Techs>{project.techs}</Project.Techs>
                </div>
            </div>
        </a>
    );
}

Project.Title = ProjectTitle;
Project.Description = ProjectDescription;
Project.Techs = ProjectTechs;
Project.Image = ProjectImage;
