import ExperienceType from "../../../../types/ExperienceType";
import TextGroup from "../../../ui/cards/text-group-container/TextGroup";
import ExperienceDate from "./ExperienceDate";

export default function Experience({ experience }: { experience: ExperienceType }) {
    return (
        <>
            <ExperienceDate>{experience.date}</ExperienceDate>

            <TextGroup>
                <TextGroup.Header>
                    <div>{`${experience.title} • ${experience.employer}`}</div>
                </TextGroup.Header>
                <TextGroup.Body>{experience.summary}</TextGroup.Body>
            </TextGroup>
        </>
    );
}
