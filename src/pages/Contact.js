import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
import { contactChannels } from '../data/site';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="page page-contact">
      <Section zone="paper" labelledBy="contact-title">
        <SectionHeading
          id="contact-title"
          eyebrow={t('contact.eyebrow')}
          title={t('contact.heading')}
          intro={t('contact.intro')}
        />
        <ul className="contact-grid">
          {contactChannels.map((c) => {
            const base = 'contact.channels.' + c.key;
            const external = c.icon !== 'mail';
            return (
              <li key={c.key}>
                <a
                  className="contact-card"
                  href={c.url}
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <span className="contact-icon" aria-hidden="true">
                    <Icon name={c.icon} size={22} />
                  </span>
                  <span className="contact-text">
                    <span className="contact-label">{t(base + '.label')}</span>
                    <span className="contact-value">{t(base + '.value')}</span>
                  </span>
                  <Icon name="arrow" size={18} className="contact-arrow" />
                </a>
              </li>
            );
          })}
        </ul>
      </Section>
    </div>
  );
}
