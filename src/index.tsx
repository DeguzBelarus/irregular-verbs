import ReactDOM from 'react-dom/client';

import { App } from './components/App';
import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const app = <App />;
root.render(app);
