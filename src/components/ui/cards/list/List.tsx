import { ReactNode } from "react";

import styles from "./listContainerCard.module.css";
import ListItem from "./list-item/ListItem";
import ListItemLink from "./list-item/ListItemLink";

export default function List({
    children,
    styleOverride,
}: {
    children: ReactNode;
    styleOverride?: string;
}) {
    return <ul className={`${styles.list} ${styleOverride}`}>{children}</ul>;
}

List.Item = ListItem;
List.ItemWithLink = ListItemLink;
