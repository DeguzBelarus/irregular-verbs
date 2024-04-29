import { MutableRefObject } from 'react';

import { useGSAPTimeline } from 'src/hooks/GSAP/useGSAPTimeline';

export const useAnimate = (scopeElement: MutableRefObject<HTMLDivElement>) => {
  const appearingTimeline = useGSAPTimeline(false, undefined, scopeElement, []);
  appearingTimeline &&
    appearingTimeline.to(scopeElement.current, {
      width: '100%',
      duration: 1,
    });
};
