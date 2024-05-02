import PROJECTS from "../../../utils/constants/projects";
import List from "../../ui/cards/list/List";
import SectionCard from "../../ui/cards/section-container/SectionCard";
import Project from "./projectItem/Project";

import styles from "./projectList.module.css";

export default function ProjectList() {
    return (
        <SectionCard>
            <span className={styles.title}>Some things I've built:</span>
            <List>
                {PROJECTS.map((project, index) => {
                    return (
                        <List.ItemWithLink link={project.link}>
                            <List.ItemWithLink.Item>
                                <Project key={index} project={project} />
                            </List.ItemWithLink.Item>
                        </List.ItemWithLink>
                    );
                })}
            </List>
        </SectionCard>
    );
}
