import { Reveal } from "./Reveal";

interface SectionHeadProps {
  eyebrow: string;
  title: string;
  lead?: string;
}

export function SectionHead({ eyebrow, title, lead }: SectionHeadProps) {
  return (
    <Reveal className="section__head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section__title">{title}</h2>
      {lead && <p className="section__lead">{lead}</p>}
    </Reveal>
  );
}
