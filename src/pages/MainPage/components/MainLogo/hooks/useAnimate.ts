import { MutableRefObject } from 'react';
import gsap from 'gsap';

import { useGSAPTimeline } from 'src/hooks/GSAP/useGSAPTimeline';

export const useAnimate = (scopeElement: MutableRefObject<HTMLDivElement>) => {
  const {
    utils: { toArray },
  } = gsap;
  const appearingTimeline = useGSAPTimeline(false, undefined, scopeElement, []);
  const letters = toArray('.logo-letter') as Array<HTMLSpanElement>;
  appearingTimeline &&
    appearingTimeline
      .to(letters, {
        y: -10,
        duration: 0.2,
        delay: 0.7,
        stagger: {
          each: 0.1,
          from: 'start',
        },
      })
      .to(
        letters,
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
      })
      .to(letters[0], {
        y: 3,
        x: -3,
        rotate: -60,
        duration: 0.2,
        delay: 0.7,
      });
};
