import { createElement, useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

interface RevealProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
  [key: string]: unknown;
}

// Fades its content in the first time it scrolls into view.
export function Reveal({ as = "div", className = "", children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    { ref, className: `reveal${visible ? " in-view" : ""}${className ? ` ${className}` : ""}`, ...rest },
    children
  );
}
