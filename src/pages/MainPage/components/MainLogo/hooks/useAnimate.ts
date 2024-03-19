import { MutableRefObject } from 'react';

import { useGSAPTimeline } from 'src/hooks/GSAP/useGSAPTimeline';

export const useAnimate = (scopeElement: MutableRefObject<HTMLDivElement>) => {
  const appearingTimeline = useGSAPTimeline(false, undefined, scopeElement, []);
  appearingTimeline &&
    appearingTimeline
      .to('.logo-letter', {
        y: -10,
        duration: 0.2,
        delay: 0.7,
        stagger: {
          each: 0.1,
          from: 'start',
        },
      })
      .to(
        '.logo-letter',
        {
          y: 0,
          duration: 0.2,
          delay: 0.2,
          stagger: {
            each: 0.1,
            from: 'start',
          },
        },
        '<',
      )
      .from('.category-text', {
        opacity: 0,
        duration: 1,
      });
};
