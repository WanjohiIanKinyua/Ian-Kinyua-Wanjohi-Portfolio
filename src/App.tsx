import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Icon } from "./components/Icon";
import { Nav } from "./components/Nav";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { navLinks, profile } from "./data/portfolio";
import { useScroll } from "./hooks/useScroll";
import { useTheme } from "./hooks/useTheme";

const sectionIds = navLinks.map((link) => link.id);

export default function App() {
  const { theme, toggle } = useTheme();
  const { scrolled, showBackToTop, activeId } = useScroll(sectionIds);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav scrolled={scrolled} activeId={activeId} theme={theme} onToggleTheme={toggle} />

      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Blog />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>

      <button
        className={`back-to-top${showBackToTop ? " show" : ""}`}
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <Icon name="fa-arrow-up" />
      </button>
    </>
  );
}
