import { profile } from "../data/portfolio";
import { Icon } from "./Icon";

export function Socials({ withEmail = false, small = false }: { withEmail?: boolean; small?: boolean }) {
  return (
    <div className={`socials${small ? " socials--sm" : ""}`}>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Icon name="fa-github" />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Icon name="fa-linkedin" />
      </a>
      {withEmail && (
        <a href={profile.emailHref} target="_blank" rel="noopener noreferrer" aria-label="Email">
          <Icon name="fa-envelope" />
        </a>
      )}
    </div>
  );
}
