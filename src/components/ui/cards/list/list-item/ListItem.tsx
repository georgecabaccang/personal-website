import { ReactNode } from "react";

import styles from "./listItemCard.module.css";

export default function ListItem({ children }: { children: ReactNode }) {
    return <li className={styles.list_item}>{children}</li>;
}
