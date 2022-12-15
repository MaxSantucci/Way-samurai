import state from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { addPost } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
// let rerenderEntrireTree = (state) => {
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} />
    </BrowserRouter>
  </React.StrictMode>
)
// }

// rerenderEntrireTree(state);

