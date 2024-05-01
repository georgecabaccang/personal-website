import ExperienceType from "../../../../types/ExperienceType";
import ExperienceDate from "./ExperienceDate";
import ExperienceSummaryGroup from "./experience-summary-group/ExperienceSummaryGroup";
import ExperienceHeader from "./experience-summary-group/experience-header/ExperienceHeader";

import styles from "./experienceItemStyle.module.css";

export default function Experience({ experience }: { experience: ExperienceType }) {
    return (
        <div className={styles.experience_container}>
            <ExperienceDate>{experience.date}</ExperienceDate>

            {/* START of Grouped text component*/}
            <ExperienceSummaryGroup>
                {/* START of Header of group */}
                <ExperienceSummaryGroup.Header>
                    <ExperienceHeader.Title>{experience.title}</ExperienceHeader.Title>
                    <ExperienceHeader.Divider>{"•"}</ExperienceHeader.Divider>
                    <ExperienceHeader.Employer>{experience.employer}</ExperienceHeader.Employer>
                </ExperienceSummaryGroup.Header>
                {/* END of Header of group */}

                {/* START of Summary of employement */}
                <ExperienceSummaryGroup.Summary>
                    {experience.summary}
                </ExperienceSummaryGroup.Summary>
                {/* END of Summary of employement */}
            </ExperienceSummaryGroup>
            {/* END of Grouped text component*/}
        </div>
    );
}
