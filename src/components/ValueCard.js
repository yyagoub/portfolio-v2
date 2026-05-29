import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';

export default function ValueCard({ itemKey }) {
  const { t } = useTranslation();
  return (
    <li className="card">
      <span className="card-icon" aria-hidden="true">
        <Icon name={itemKey} size={26} />
      </span>
      <h3 className="card-title">{t('values.items.' + itemKey + '.title')}</h3>
      <p className="card-body">{t('values.items.' + itemKey + '.body')}</p>
    </li>
  );
}
