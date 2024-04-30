import { ReactNode } from "react";

const imageStyles = {
    image: {
        border: "1px solid gray",
        width: "128px",
        height: "72px",
        borderRadius: "0.18rem",
    },
};

export default function ProjectImage({ children }: { children: ReactNode }) {
    return <img style={imageStyles.image} src={children as string} />;
}
