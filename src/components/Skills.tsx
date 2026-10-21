import { skills } from "../data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHead eyebrow="Toolkit" title="Skills & technologies" lead="The tools I use to design, build, ship and support software." />

        <div className="skills">
          {skills.map((group) => (
            <Reveal as="article" className="skill-group" key={group.title}>
              <h3>
                <Icon name={group.icon} /> {group.title}
              </h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
