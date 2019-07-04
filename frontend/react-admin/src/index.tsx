import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './app';

import './styles/index.scss';

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();
