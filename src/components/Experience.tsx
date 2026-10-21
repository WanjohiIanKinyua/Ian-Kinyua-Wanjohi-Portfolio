import { experience } from "../data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Experience() {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <SectionHead
          eyebrow="Career"
          title="Work experience"
          lead="Roles across software development, business systems, research and IT support."
        />

        <ol className="timeline">
          {experience.map((job) => (
            <Reveal as="li" className="timeline__item" key={`${job.company}-${job.period}`}>
              <div className="timeline__date">
                {job.period} {job.mode && <span className="pill">{job.mode}</span>}
              </div>
              <div className="timeline__card">
                <h3>{job.title}</h3>
                <p className="timeline__org">{job.company}</p>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
