import ProjectImage from "./ProjectImage";
import ProjectType from "../../../../types/ProjectType";
import TextGroup from "../../../ui/cards/text-group-container/TextGroup";

export default function Project({ project }: { project: ProjectType }) {
    return (
        <>
            <Project.Image
                thumbnail={project.thumbnail}
                alt={`${project.title}.png`}
                compressedThumbnail={project.compressedThumbnail}
                type={project.type}
            />
            <TextGroup>
                <TextGroup.Header>{project.title}</TextGroup.Header>
                <TextGroup.Body>{project.description}</TextGroup.Body>
                <TextGroup.List>{project.techs}</TextGroup.List>
            </TextGroup>
        </>
    );
}

Project.Image = ProjectImage;
