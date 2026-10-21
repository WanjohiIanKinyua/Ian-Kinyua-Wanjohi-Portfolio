import { useState } from "react";
import { projectFilters, projects } from "../data/portfolio";
import type { Project, ProjectCategory } from "../types";
import { Icon } from "./Icon";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

type Filter = ProjectCategory | "all";

function ProjectCard({ project }: { project: Project }) {
  const className = `project project--${project.accent}${project.featured ? " project--featured" : ""}`;

  return (
    <Reveal as="article" className={className}>
      <div className="project__top">
        <span className="project__label">{project.label}</span>
        {project.live && (
          <span className="project__live">
            <span className="dot" aria-hidden="true" /> Live
          </span>
        )}
      </div>
      <h3 className="project__title">{project.title}</h3>
      <p className="project__desc">{project.description}</p>
      <ul className="tags" aria-label="Tech stack">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {(project.live || project.source) && (
        <div className="project__links">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <Icon name="fa-external-link" /> Live site
            </a>
          )}
          {project.source && (
            <a href={project.source} target="_blank" rel="noopener noreferrer">
              <Icon name="fa-github" /> Source code
            </a>
          )}
        </div>
      )}
    </Reveal>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <SectionHead
          eyebrow="Portfolio"
          title="Selected projects"
          lead="Products I've designed and built, from live platforms to machine-learning systems."
        />

        <div className="filters" role="group" aria-label="Filter projects">
          {projectFilters.map((option) => {
            const count = option.value === "all" ? projects.length : projects.filter((p) => p.category === option.value).length;
            return (
              <button
                key={option.value}
                type="button"
                className={`filters__btn${filter === option.value ? " is-active" : ""}`}
                aria-pressed={filter === option.value}
                onClick={() => setFilter(option.value)}
              >
                {option.label} <span className="filters__count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="projects">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
