import styles from "./textGroup.module.css";

export default function TextGroupList({ children }: { children: string[] }) {
    return (
        <div className={`${styles.text_group__list}`}>
            {children.map((item) => {
                return <div className={styles.text_group__list__item}>{item}</div>;
            })}
        </div>
    );
}
