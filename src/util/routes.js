import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

export const routes = [
  {
    path: '/about',
    name: 'About',
    showInSidebar: true,
    component: About,
    defualtRoute: true,
  },
  {
    path: '/projects',
    name: 'Projects',
    showInSidebar: true,
    component: Projects,
  },
  {
    path: '/contact',
    name: 'Contact',
    showInSidebar: true,
    component: Contact,
  },
];

function getRoutes() {
  return routes.map((route) => {
    return <Route path={route.path} component={route.component} exact />;
  });
}

export default function Routes() {
  return (
    <div>
      <Switch>
        {getRoutes(routes)}
        <Redirect from='*' to='/about' />
      </Switch>
    </div>
  );
}
