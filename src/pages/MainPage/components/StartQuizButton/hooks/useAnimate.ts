import { MutableRefObject } from 'react';

import { useGSAPTimeline } from 'src/hooks/GSAP/useGSAPTimeline';

export const useAnimate = (scopeElement: MutableRefObject<HTMLButtonElement>) => {
  const appearingTimeline = useGSAPTimeline(false, undefined, scopeElement, []);
  scopeElement.current && (scopeElement.current.disabled = true);
  appearingTimeline &&
    appearingTimeline
      .from('.start-quiz-button', {
        opacity: 0,
        duration: 1,
        delay: 2.2,
        onComplete: () => {
          scopeElement.current.disabled = false;
        },
      })
      .to('.start-quiz-button', {
        duration: 0.7,
        backgroundColor: 'rgba(5, 195, 221, 0.6)',
      });
};
