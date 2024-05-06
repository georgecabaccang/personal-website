import PROJECTS from "../../../utils/constants/projects";
import List from "../../ui/cards/list/List";
import SectionCard from "../../ui/cards/section-container/SectionCard";
import Project from "./projectItem/Project";

export default function ProjectList() {
    return (
        <SectionCard>
            <SectionCard.Title>PROJECTS</SectionCard.Title>
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
