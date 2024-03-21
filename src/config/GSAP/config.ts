import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';

import { GSAPEasingEnum } from 'src/constants/gsapConstants';

const { defaults, registerPlugin } = gsap;
defaults({ ease: GSAPEasingEnum.NONE });
registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);
