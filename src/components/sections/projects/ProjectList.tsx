import { Card, Fade, Slide } from "@mui/material";

export default function ProjectList({ section }: { section: string }) {
    const direction = section === "proj" ? "left" : "right";

    return (
        <Fade
            in={section === "proj"}
            style={{ position: "absolute" }}
            timeout={{ enter: 500, exit: 500 }}
        >
            <div>
                <Slide
                    direction={direction}
                    in={section === "proj"}
                    mountOnEnter
                    unmountOnExit
                    timeout={{ enter: 700, exit: 300 }}
                >
                    <Card sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
                        Projects List
                    </Card>
                </Slide>
            </div>
        </Fade>
    );
}
