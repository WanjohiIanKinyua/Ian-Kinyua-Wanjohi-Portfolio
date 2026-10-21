import { about, features, languages, strengths } from "../data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <Reveal className="about__text">
          <p className="eyebrow">About me</p>
          <h2 className="section__title">Turning ideas into reliable, useful software.</h2>
          {about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}

          <div className="about__extras">
            <div>
              <h3 className="mini-title">Languages</h3>
              <ul className="chips">
                {languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mini-title">Strengths</h3>
              <ul className="chips">
                {strengths.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="about__cards">
          {features.map((feature) => (
            <Reveal as="article" className="feature" key={feature.title}>
              <span className="feature__icon">
                <Icon name={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
