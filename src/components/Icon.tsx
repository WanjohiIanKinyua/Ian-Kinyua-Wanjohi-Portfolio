// Font Awesome 4.7 icon (stylesheet loaded in index.html). Decorative by default.
export function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <i className={`fa ${name}${className ? ` ${className}` : ""}`} aria-hidden="true" />;
}
