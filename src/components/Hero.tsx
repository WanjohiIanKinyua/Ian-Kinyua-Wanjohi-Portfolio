import { profile, stats } from "../data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__status">
            <Icon name="fa-code" className="hero__status-icon" /> Welcome to my portfolio
          </p>
          <h1 className="hero__title">
            Hi, I'm <span className="text-gold">{profile.name}</span>.
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__lead">{profile.lead}</p>

          <div className="hero__actions">
            <a className="btn btn--gold" href="#projects">
              View my work <Icon name="fa-arrow-right" />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="portrait">
            <div className="portrait__frame">
              <img src={profile.portrait} alt={`Portrait of ${profile.name}`} width={408} height={612} fetchPriority="high" />
            </div>
            <div className="portrait__badge portrait__badge--top">
              <Icon name="fa-code" />
              <div>
                <strong>Full-stack</strong>
                <span>React · Node · PHP</span>
              </div>
            </div>
            <div className="portrait__badge portrait__badge--bottom">
              <Icon name="fa-cogs" />
              <div>
                <strong>SAP Business One</strong>
                <span>Consulting &amp; development</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Reveal as="ul" className="stats">
          {stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
