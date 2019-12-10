import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SingIn';

import Profile from '~/pages/Profile';
import Students from '~/pages/Students';
import Plans from '~/pages/Plans';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
