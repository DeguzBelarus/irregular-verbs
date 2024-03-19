import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';
import './config/GSAP/config.ts';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
root.render(app);
