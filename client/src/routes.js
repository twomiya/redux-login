import React from 'react';

import { Route } from 'react-router-dom';

import App from './components/App';

import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';

export default (
  <div className="container">
    <Route exact path="/" component={ App } />
    <Route path="/signup" component={ SignupPage } />
    <Route path="/login" component={ LoginPage } />
  </div>
)