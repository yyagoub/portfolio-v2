import React from 'react';
import { useTranslation } from 'react-i18next';

export default function MetricCard({ itemKey }) {
  const { t } = useTranslation();
  return (
    <li className="metric">
      <span className="metric-value">{t('metrics.items.' + itemKey + '.value')}</span>
      <span className="metric-label">{t('metrics.items.' + itemKey + '.label')}</span>
    </li>
  );
}
