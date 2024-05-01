import TOOLS from "../../../utils/constants/tools";
import Tool from "./toolItem/Tool";

import styles from "./toolList.module.css";

export default function ToolList() {
    return (
        <div className={`section_global_container`}>
            <span>Tools that I can use:</span>
            <ul className={styles.list}>
                {TOOLS.map((tool, index) => {
                    return <Tool key={index} tool={tool} />;
                })}
            </ul>
        </div>
    );
}
