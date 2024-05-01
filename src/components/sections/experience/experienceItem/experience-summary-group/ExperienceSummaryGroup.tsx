import { ReactNode } from "react";
import ExperienceHeader from "./experience-header/ExperienceHeader";
import ExperienceSummary from "./experience-summary/ExperienceSummary";

import style from "./group.module.css";

export default function ExperienceSummaryGroup({ children }: { children: ReactNode }) {
    return <div className={style.group_container}>{children}</div>;
}

ExperienceSummaryGroup.Header = ExperienceHeader;
ExperienceSummaryGroup.Summary = ExperienceSummary;
