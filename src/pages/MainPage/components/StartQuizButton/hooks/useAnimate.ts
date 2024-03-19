import { MutableRefObject } from 'react';

import { useGSAPTimeline } from 'src/hooks/GSAP/useGSAPTimeline';

export const useAnimate = (scopeElement: MutableRefObject<HTMLButtonElement>) => {
  const appearingTimeline = useGSAPTimeline(false, undefined, scopeElement, []);
  appearingTimeline &&
    appearingTimeline.from('.start-quiz-button', {
      opacity: 0,
      duration: 1,
      delay: 2.2,
      onComplete: () => (scopeElement.current.disabled = false),
    });
};
