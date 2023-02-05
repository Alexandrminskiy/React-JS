import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './redux/satate';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App
      posts={state.profilePage.posts}
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
    />

  </React.StrictMode>
);

