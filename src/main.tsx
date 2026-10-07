import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import faviconUrl from './assets/images/favicon.jfif';

const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]') ?? document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/jpeg';
favicon.href = faviconUrl;
document.head.appendChild(favicon);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
