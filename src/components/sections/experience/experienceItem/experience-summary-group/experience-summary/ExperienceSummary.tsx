import { ReactNode } from "react";

import style from "./summary.module.css";

export default function ExperienceSummary({ children }: { children: ReactNode }) {
    return <div className={style.summary_text}>{children}</div>;
}
