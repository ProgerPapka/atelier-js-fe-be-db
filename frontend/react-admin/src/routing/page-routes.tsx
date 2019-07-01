import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginPage } from '../pages/login';
import { MainPage } from '../pages/main';

export const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/main" component={MainPage} />
      <Redirect from='*' to='/' />
    </Switch>
  );
};
