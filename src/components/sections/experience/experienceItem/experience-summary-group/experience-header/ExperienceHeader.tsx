import { ReactNode } from "react";
import ExprienceTitle from "./ExprienceTitle";
import ExperienceEmployer from "./ExperienceEmployer";

import styles from "./header.module.css";
import ExperienceDivider from "./ExperienceDivider";

export default function ExperienceHeader({ children }: { children: ReactNode }) {
    return <div className={styles.header_container}>{children}</div>;
}

ExperienceHeader.Title = ExprienceTitle;
ExperienceHeader.Divider = ExperienceDivider;
ExperienceHeader.Employer = ExperienceEmployer;
