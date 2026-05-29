import React from 'react';
import { useTranslation } from 'react-i18next';
import { LANGS } from '../i18n';
import Icon from './Icon';

export default function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const current = LANGS[i18n.language] ? i18n.language : 'en';
  const next = current === 'en' ? 'ar' : 'en';

  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={() => i18n.changeLanguage(next)}
      aria-label={t('sidebar.languageLabel')}
      title={t('sidebar.languageLabel')}
    >
      <Icon name="globe" size={18} />
      <span>{LANGS[next].label}</span>
    </button>
  );
}
