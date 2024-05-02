import { ReactNode } from "react";
import ExperienceHeader from "./experience-header/ExperienceHeader";
import ExperienceSummary from "./experience-summary/ExperienceSummary";
import TextGroup from "../../../../ui/cards/text-group-container/TextGroup";

export default function ExperienceSummaryGroup({ children }: { children: ReactNode }) {
    return <TextGroup>{children}</TextGroup>;
}

ExperienceSummaryGroup.Header = ExperienceHeader;
ExperienceSummaryGroup.Summary = ExperienceSummary;
