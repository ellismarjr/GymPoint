import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SingIn';

import Profile from '~/pages/Profile';
import Students from '~/pages/Students';
import StudentForm from '~/pages/StudentForm';

import Plans from '~/pages/Plans';
import PlanForm from '~/pages/Plans/PlansForm';
import Enrollments from '~/pages/Enrollments';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/students" component={Students} isPrivate />
      <Route path="/student/new" component={StudentForm} isPrivate />
      <Route path="/student/:id/edit" component={StudentForm} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/plan/new" component={PlanForm} isPrivate />
      <Route path="/plan/:id/edit" component={PlanForm} isPrivate />
      <Route path="/enrollments" component={Enrollments} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
