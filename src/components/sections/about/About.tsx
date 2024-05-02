import SectionCard from "../../ui/cards/section-container/SectionCard";
import TextGroup from "../../ui/cards/text-group-container/TextGroup";
import SkillList from "../skills/SkillList";

export default function About() {
    return (
        <SectionCard>
            <TextGroup>
                <TextGroup.Header>
                    <span>Hi, my name is</span>
                </TextGroup.Header>

                <TextGroup.Body>
                    <h1>George Alfred Cabaccang.</h1>
                </TextGroup.Body>

                <TextGroup.Body>
                    <p>
                        During the pandemic, I found myself with a lot of time on my hands, so I
                        decided to learn how to build websites. Now, I'm really into it, and I'm
                        enjoying the process of creating and improving my skills. It's been a
                        rewarding way to make the most of a challenging situation. So, here we are.
                        . .
                    </p>
                </TextGroup.Body>

                <TextGroup.Footer>
                    <SkillList />
                </TextGroup.Footer>
            </TextGroup>
        </SectionCard>
    );
}
