import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../util/routes';

function createLinkes() {
  return routes
    .filter((route) => route.showInSidebar)
    .map((route) => {
      return (
        <>
          <br />
          <NavLink
            to={route.path}
            className='a'
            activeStyle={{ color: 'white' }}
            exact
          >
            {route.name}
          </NavLink>
        </>
      );
    });
}

function Sidebar() {
  return (
    <div class='section-1'>
      <i class='fas fa-code fa-5x white'></i>
      <h2>Yousef Yagoub,</h2>
      <p>Software Developer.</p>
      {createLinkes()}
    </div>
  );
}

export default Sidebar;
