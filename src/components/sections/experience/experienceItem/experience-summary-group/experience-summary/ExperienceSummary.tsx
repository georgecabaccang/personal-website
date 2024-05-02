import { ReactNode } from "react";

export default function ExperienceSummary({ children }: { children: ReactNode }) {
    return <div className={`list_item_body `}>{children}</div>;
}
