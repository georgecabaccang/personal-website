import styles from "./projectStyles.module.css";
import { MISC } from "../../../../utils/constants/misc";

export default function ProjectImage({ thumbnail, type }: { thumbnail: string; type: string }) {
    const appStyles =
        type === MISC.projectType.web ? styles.thumbnail_web : styles.thumbnail_mobile;

    return (
        <div className={styles.thumbnail_container}>
            <img className={appStyles} src={thumbnail} />
        </div>
    );
}
