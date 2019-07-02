import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LoginPage } from '../pages/login';
import { MainPage } from '../pages/main';
import { Test } from '../pages/content';

export const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/main" component={MainPage} />
      <Route from='/test'  component={Test} />
      <Redirect from='*' to='/' />
    </Switch>
  );
};
