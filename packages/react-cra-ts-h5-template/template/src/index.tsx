// 等价于 import 'react-app-polyfill/stable'（React 官方不常升级 core-js）。
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// 兼容支持到 IE9，如果不需要可删除。
import 'react-app-polyfill/ie9';
import 'the-new-css-reset/css/reset.css';
import './assets/styles/index.less';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
