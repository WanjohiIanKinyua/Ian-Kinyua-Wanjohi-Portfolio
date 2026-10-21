import { certifications, education } from "../data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Education() {
  return (
    <section className="section" id="education">
      <div className="container edu">
        <Reveal>
          <p className="eyebrow">Education</p>
          <h2 className="section__title">Academic background</h2>
          <div className="edu__list">
            {education.map((item) => (
              <article className="edu__item" key={item.degree}>
                <span className="edu__icon">
                  <Icon name="fa-graduation-cap" />
                </span>
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                  <span className="edu__date">{item.period}</span>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="eyebrow">Certifications</p>
          <h2 className="section__title">Professional certificates</h2>
          <ul className="certs">
            {certifications.map((cert) => (
              <li key={cert}>
                <Icon name="fa-certificate" /> {cert}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
