import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/portfolio";
import type { Theme } from "../hooks/useTheme";
import { Icon } from "./Icon";

interface NavProps {
  scrolled: boolean;
  activeId: string;
  theme: Theme;
  onToggleTheme: () => void;
}

export function Nav({ scrolled, activeId, theme, onToggleTheme }: NavProps) {
  const [open, setOpen] = useState(false);
  const themeLabel = theme === "light" ? "Switch to dark mode" : "Switch to light mode";

  // Lock page scroll while the mobile menu is open; close it with Escape or when the screen widens.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label={`${profile.name} - back to top`} onClick={close}>
          <img src={profile.logo} alt="" width={38} height={38} />
          <span>{profile.shortName}</span>
        </a>

        <nav className="nav__links" id="navLinks" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={activeId === link.id ? "is-active" : undefined} onClick={close}>
              {link.label}
            </a>
          ))}
          <a className="btn btn--gold btn--sm nav__cta" href={profile.resume} download={profile.resumeDownloadName} onClick={close}>
            <Icon name="fa-download" /> Resume
          </a>
        </nav>

        <div className="nav__actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={themeLabel} title={themeLabel}>
            <Icon name={theme === "light" ? "fa-moon-o" : "fa-sun-o"} />
          </button>
          <button
            className="nav__toggle"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="navLinks"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
