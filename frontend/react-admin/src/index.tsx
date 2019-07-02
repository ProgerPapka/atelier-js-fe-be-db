import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './app';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
