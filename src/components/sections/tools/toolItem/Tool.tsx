import styles from "./tool.module.css";

export default function Tool({ tool }: { tool: string }) {
    return <div className={`${styles.tool}`}>{tool}</div>;
}
