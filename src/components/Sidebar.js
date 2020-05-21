import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../util/routes';

function createLinkes() {
  return routes
    .filter((route) => route.showInSidebar)
    .map((route, index) => {
      return (
        <dev key={index}>
          <br />
          <NavLink
            to={route.path}
            className='a'
            activeStyle={{ color: 'white' }}
            exact
          >
            {route.name}
          </NavLink>
        </dev>
      );
    });
}

function Sidebar() {
  return (
    <div className='section-1'>
      <i className='fas fa-code fa-5x white'></i>
      <h2>Yousef Yagoub,</h2>
      <p>Software Developer.</p>
      {createLinkes()}
    </div>
  );
}

export default Sidebar;
