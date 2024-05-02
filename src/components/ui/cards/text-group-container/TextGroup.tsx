import { ReactNode } from "react";
import TextGroupHeader from "./TextGroupHeader";
import TextGroupBody from "./TextGroupBody";
import TextGroupFooter from "./TextGroupFooter";

import styles from "./textGroup.module.css";
import TextGroupList from "./TextGroupList";

export default function TextGroup({ children }: { children: ReactNode }) {
    return <div className={styles.text_group}>{children}</div>;
}

TextGroup.Header = TextGroupHeader;
TextGroup.Body = TextGroupBody;
TextGroup.List = TextGroupList;
TextGroup.Footer = TextGroupFooter;
