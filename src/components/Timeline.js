import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Timeline({ items }) {
  const { t } = useTranslation();
  return (
    <ol className="timeline">
      {items.map((key) => {
        const base = 'experience.items.' + key;
        const tags = t(base + '.tags', { returnObjects: true });
        const tagList = Array.isArray(tags) ? tags : [];
        return (
          <li key={key} className="timeline-item">
            <span className="timeline-period">{t(base + '.period')}</span>
            <div className="timeline-body">
              <h3 className="timeline-title">{t(base + '.title')}</h3>
              <p className="timeline-org">{t(base + '.org')}</p>
              <p className="timeline-text">{t(base + '.body')}</p>
              {tagList.length > 0 && (
                <ul className="tags" aria-label={t('experience.skillsLabel')}>
                  {tagList.map((tag, i) => (
                    <li key={i} className="tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
