import { MutableRefObject, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { Nullable } from 'src/types/types';

export const useGSAPTimeline = (
  isPaused: boolean,
  scrollTrigger?: gsap.DOMTarget | ScrollTrigger.Vars,
  scopeElement?: MutableRefObject<HTMLDivElement | HTMLButtonElement>,
  dependencies?: Array<unknown>,
): Nullable<gsap.core.Timeline> => {
  const [timeline, setTimeline] = useState<gsap.core.Timeline>(null);
  useGSAP(
    () => {
      setTimeline(gsap.timeline({ paused: isPaused, scrollTrigger }));
    },
    { dependencies, scope: scopeElement, revertOnUpdate: true },
  );
  return timeline;
};
