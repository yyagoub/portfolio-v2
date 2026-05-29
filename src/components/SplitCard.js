import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from './Icon';

// Split layout: a visual panel on one side, content on the other.
// Alternates sides down the page via the `reverse` prop. The visual is a
// styled brand panel (no photography) that can later be swapped for imagery.
export default function SplitCard({ itemKey, reverse, zone = 'sand' }) {
  const { t } = useTranslation();
  const base = 'platforms.items.' + itemKey;
  return (
    <article className={'split' + (reverse ? ' reverse' : '')}>
      <div className={'split-visual zone-' + zone}>
        <Icon name="shield" size={40} />
        <span className="visual-mark">{t(base + '.short')}</span>
      </div>
      <div className="split-content">
        <h3>{t(base + '.name')}</h3>
        <p className="split-desc">{t(base + '.desc')}</p>
        <p className="split-role">
          <span className="split-role-label">{t('platforms.roleLabel')}:</span>{' '}
          {t(base + '.role')}
        </p>
      </div>
    </article>
  );
}
