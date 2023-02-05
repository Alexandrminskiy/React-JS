import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

let posts = [
  { id: 1, message: 'привет как дела ?', likesCount: 12},
  { id: 2, message: 'какая хорошая погода сегодня?', likesCount: 11},
]

let dialogsData = [
  { id: 1, name: 'Дима' },
  { id: 2, name: 'Женя' },
  { id: 3, name: 'Лена' },
  { id: 4, name: 'Тусик' },
]

let messagesData = [
  { id: 1, message: 'hello' },
  { id: 2, message: 'привет' },
  { id: 3, message: 'как дела' },
  { id: 4, message: 'что делаешь ?' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />
    
  </React.StrictMode>
);

