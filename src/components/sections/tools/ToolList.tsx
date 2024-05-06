import TOOLS from "../../../utils/constants/tools";
import List from "../../ui/cards/list/List";
import SectionCard from "../../ui/cards/section-container/SectionCard";
import Tool from "./toolItem/Tool";

import styles from "./toolList.module.css";

export default function ToolList() {
    return (
        <SectionCard>
            <SectionCard.Title>TOOLS</SectionCard.Title>
            <List styleOverride={styles.list_tools}>
                {TOOLS.map((tool, index) => {
                    return <Tool key={index} tool={tool} />;
                })}
            </List>
        </SectionCard>
    );
}
