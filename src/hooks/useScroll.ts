import { useEffect, useState } from "react";

interface ScrollState {
  scrolled: boolean;
  showBackToTop: boolean;
  activeId: string;
}

// Tracks the scroll position for the nav background, the back-to-top button and the active nav link.
export function useScroll(sectionIds: string[]): ScrollState {
  const [state, setState] = useState<ScrollState>({ scrolled: false, showBackToTop: false, activeId: "" });

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      let activeId = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && y + 140 >= section.offsetTop) activeId = id;
      }
      setState((prev) => {
        const next = { scrolled: y > 20, showBackToTop: y > 500, activeId };
        return prev.scrolled === next.scrolled && prev.showBackToTop === next.showBackToTop && prev.activeId === next.activeId
          ? prev
          : next;
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sectionIds]);

  return state;
}
