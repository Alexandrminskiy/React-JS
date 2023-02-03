import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let posts = [
  { id: 1, message: 'привет как дела ?', likesCount: 12},
  { id: 2, message: 'какая хорошая погода сегодня?', likesCount: 11},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts}/>
    
  </React.StrictMode>
);

