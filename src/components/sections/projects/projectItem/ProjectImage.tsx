import styles from "./projectStyles.module.css";
import { MISC } from "../../../../utils/constants/misc";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function ProjectImage({
    thumbnail,
    compressedThumbnail,
    alt,
    type,
}: {
    thumbnail: string;
    compressedThumbnail: string;
    alt: string;
    type: string;
}) {
    const appStyles =
        type === MISC.projectType.web ? styles.thumbnail_web : styles.thumbnail_mobile;

    return (
        <div className={styles.thumbnail_container}>
            <LazyLoadImage
                className={appStyles}
                src={thumbnail}
                placeholderSrc={compressedThumbnail}
                alt={alt}
                effect="blur"
            />
        </div>
    );
}
