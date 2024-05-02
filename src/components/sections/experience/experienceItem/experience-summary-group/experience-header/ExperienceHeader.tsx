import { ReactNode } from "react";
import ExprienceTitle from "./ExprienceTitle";
import ExperienceEmployer from "./ExperienceEmployer";
import ExperienceDivider from "./ExperienceDivider";

export default function ExperienceHeader({ children }: { children: ReactNode }) {
    return <div className={`list_item_header `}>{children}</div>;
}

ExperienceHeader.Title = ExprienceTitle;
ExperienceHeader.Divider = ExperienceDivider;
ExperienceHeader.Employer = ExperienceEmployer;
