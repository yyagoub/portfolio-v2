import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { routes } from '../util/routes';
import LanguageToggle from './LanguageToggle';

export default function TopNav() {
  const { t } = useTranslation();
  return (
    <header className="topnav">
      <div className="topnav-inner">
        <NavLink to="/about" className="topnav-brand" aria-label={t('sidebar.name')}>
          <span className="nav-monogram" aria-hidden="true">
            YY
          </span>
          <span className="topnav-name">{t('sidebar.name')}</span>
        </NavLink>
        <nav className="topnav-links" aria-label={t('sidebar.role')}>
          {routes
            .filter((route) => route.showInSidebar)
            .map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className="nav-link"
                activeClassName="is-active"
                exact
              >
                {t(route.labelKey)}
              </NavLink>
            ))}
          <LanguageToggle />
        </nav>
      </div>
    </header>
  );
}
