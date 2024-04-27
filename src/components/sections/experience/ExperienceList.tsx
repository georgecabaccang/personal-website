import { Card, Fade, Slide } from "@mui/material";

export default function ExperienceList({ section }: { section: string }) {
    const direction = section === "exp" ? "left" : "right";

    return (
        <Fade
            in={section === "exp"}
            style={{ position: "absolute" }}
            timeout={{ enter: 500, exit: 500 }}
        >
            <div>
                <Slide
                    direction={direction}
                    in={section === "exp"}
                    mountOnEnter
                    unmountOnExit
                    timeout={{ enter: 700, exit: 300 }}
                >
                    <Card sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
                        Experience List
                    </Card>
                </Slide>
            </div>
        </Fade>
    );
}
