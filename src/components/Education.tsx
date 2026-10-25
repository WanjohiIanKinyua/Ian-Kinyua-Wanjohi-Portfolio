import { certifications, education, languages } from "../data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Learning</p>
          <h2 className="section__title">
            Learning, <span className="text-gold">certified</span>
          </h2>
        </Reveal>

        <div className="learn">
          <Reveal>
            <h3 className="learn__label">
              <Icon name="fa-graduation-cap" /> Education
            </h3>
            <ol className="edu-timeline">
              {education.map((item) => (
                <li key={item.degree}>
                  <p className="edu-timeline__date">{item.period}</p>
                  <h3>{item.degree}</h3>
                  <p className="edu-timeline__school">{item.school}</p>
                  {item.honours && <p className="edu-timeline__honours">{item.honours}</p>}
                </li>
              ))}
            </ol>

            <div className="learn__langs">
              <h3 className="learn__label">
                <Icon name="fa-globe" /> Languages
              </h3>
              <ul className="chips">
                {languages.map((language) => (
                  <li key={language}>{language}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <h3 className="learn__label">
              <Icon name="fa-check" /> Training &amp; certificates
            </h3>
            {certifications.map((group) => (
              <div className="cert-group" key={group.issuer}>
                <p className="cert-group__issuer">{group.issuer}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
