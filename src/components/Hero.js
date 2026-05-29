import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';
import DiagramHero from './DiagramHero';

export default function Hero() {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="hero-copy">
        <p className="hero-eyebrow">{t('hero.eyebrow')}</p>
        <h1 id="hero-title" className="hero-title">
          {t('hero.title')}
        </h1>
        <p className="hero-tagline">{t('hero.tagline')}</p>
        <div className="hero-actions">
          <NavLink to="/contact" className="btn btn-primary">
            {t('hero.ctaPrimary')}
            <Icon name="arrow" size={18} className="icon-inline-end" />
          </NavLink>
          <NavLink to="/platforms" className="btn btn-ghost">
            {t('hero.ctaSecondary')}
          </NavLink>
        </div>
      </div>
      <DiagramHero />
    </div>
  );
}
