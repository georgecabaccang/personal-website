import { ReactNode } from "react";

export default function ProjectDescription({ children }: { children: ReactNode }) {
    return <div className="text-tertiary">{children}</div>;
}
