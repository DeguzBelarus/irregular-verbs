import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

import { App } from './components/App';
import { IS_DEVELOPMENT } from './constants/constants';
import './config/GSAP/config.ts';
import './index.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
if (!IS_DEVELOPMENT) {
  disableReactDevTools();
}
root.render(app);
