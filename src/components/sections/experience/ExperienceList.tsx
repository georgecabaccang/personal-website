import EXPERIENCE from "../../../utils/constants/experience";
import List from "../../ui/cards/list/List";
import SectionCard from "../../ui/cards/section-container/SectionCard";
import Experience from "./experienceItem/Experience";

export default function ExperienceList() {
    return (
        <SectionCard>
            <List>
                {EXPERIENCE.map((experience, index) => {
                    return <Experience key={index} experience={experience} />;
                })}
            </List>
        </SectionCard>
    );
}
