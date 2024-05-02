import SectionCard from "../../ui/cards/section-container/SectionCard";
import SkillList from "../skills/SkillList";

export default function About() {
    return (
        <SectionCard>
            <span className={``}>Hi, my name is</span>
            <h1 className={``}>George Alfred Cabaccang.</h1>
            <p className={`list_item_body`}>
                During the pandemic, I found myself with a lot of time on my hands, so I decided to
                learn how to build websites. Now, I'm really into it, and I'm enjoying the process
                of creating and improving my skills. It's been a rewarding way to make the most of a
                challenging situation. So, here we are. . .
            </p>
            <SkillList />
        </SectionCard>
    );
}
