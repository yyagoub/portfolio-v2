import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

export const routes = [
  {
    path: '/about',
    labelKey: 'nav.home',
    showInSidebar: true,
    component: About,
    defaultRoute: true,
  },
  {
    path: '/platforms',
    labelKey: 'nav.platforms',
    showInSidebar: true,
    component: Projects,
  },
  {
    path: '/contact',
    labelKey: 'nav.contact',
    showInSidebar: true,
    component: Contact,
  },
];

function getRoutes() {
  return routes.map((route) => (
    <Route path={route.path} component={route.component} exact key={route.path} />
  ));
}

export default function Routes() {
  return (
    <Switch>
      {getRoutes()}
      <Redirect from="*" to="/about" />
    </Switch>
  );
}
