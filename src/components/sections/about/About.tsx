import { Card, Fade, Slide } from "@mui/material";

export default function About({ section }: { section: string }) {
    const direction = section === "about" ? "left" : "right";

    return (
        <Fade
            in={section === "about"}
            style={{ position: "absolute" }}
            timeout={{ enter: 500, exit: 500 }}
        >
            <div>
                <Slide
                    direction={direction}
                    in={section === "about"}
                    mountOnEnter
                    unmountOnExit
                    timeout={{ enter: 700, exit: 300 }}
                >
                    <Card sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
                        About
                    </Card>
                </Slide>
            </div>
        </Fade>
    );
}
