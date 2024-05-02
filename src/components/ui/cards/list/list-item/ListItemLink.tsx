import { ReactNode } from "react";
import ListItem from "./ListItem";

export default function ListItemLink({ children, link }: { children: ReactNode; link: string }) {
    return (
        <a href={link} target="_blank">
            {children}
        </a>
    );
}

ListItemLink.Item = ListItem;
