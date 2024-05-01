import PROJECTS from "../../../utils/constants/projects";
import Project from "./projectItem/Project";

import styles from "./projectList.module.css";

export default function ProjectList() {
    return (
        <div className={`section_global_container`}>
            <span className={styles.title}>Some things I've built:</span>
            <ul className={styles.list}>
                {PROJECTS.map((project, index) => {
                    return <Project key={index} project={project} />;
                })}
            </ul>
        </div>
    );
}
