import styles from "./projectStyles.module.css";

export default function ProjectTechs({ children }: { children: string[] }) {
    return (
        <div className={`${styles.tech_container}`}>
            {children.map((tech) => {
                return <div className={styles.tech}>{tech}</div>;
            })}
        </div>
    );
}
