import { profile } from "../data/portfolio";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";

const contactItems = [
  { icon: "fa-envelope", label: "Email", value: profile.email, href: profile.emailHref, external: true },
  { icon: "fa-phone", label: "Phone", value: profile.phone, href: profile.phoneHref, external: false },
  { icon: "fa-github", label: "GitHub", value: profile.githubHandle, href: profile.github, external: true },
  { icon: "fa-linkedin", label: "LinkedIn", value: profile.shortName, href: profile.linkedin, external: true },
];

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal className="contact">
          <div className="contact__intro">
            <p className="eyebrow">Contact</p>
            <h2 className="section__title">Let's build something great together.</h2>
            <p>Have a project idea, a collaboration or a role in mind? I'd love to hear about it.</p>
            <div className="hero__actions">
              <a className="btn btn--gold" href={profile.emailHref} target="_blank" rel="noopener noreferrer">
                <Icon name="fa-paper-plane" /> Send me an email
              </a>
              <a className="btn btn--ghost" href={profile.resume} download={profile.resumeDownloadName}>
                <Icon name="fa-download" /> Resume
              </a>
            </div>
          </div>

          <ul className="contact__list">
            {contactItems.map((item) => (
              <li key={item.label}>
                <span className="contact__icon">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <span>{item.label}</span>
                  <a href={item.href} {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                    {item.value}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <p className="contact__note">References are available on request.</p>
      </div>
    </section>
  );
}
