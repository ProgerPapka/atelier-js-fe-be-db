import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { PageRoutes } from '../../routing';

export const App = () => {
  return (
    <Router>
      <PageRoutes />
    </Router>
  );
};
