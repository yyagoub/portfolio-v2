import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import MetricCard from '../components/MetricCard';
import ValueCard from '../components/ValueCard';
import ReadMore from '../components/ReadMore';
import { metrics, values, growth } from '../data/site';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="page page-home">
      <section className="section zone-paper" aria-labelledby="hero-title">
        <div className="section-inner">
          <Hero />
        </div>
      </section>

      <Section zone="sand" labelledBy="story-title">
        <SectionHeading
          id="story-title"
          eyebrow={t('about.eyebrow')}
          title={t('about.heading')}
        />
        <div className="prose">
          <p>{t('about.lead')}</p>
          <ReadMore more={t('about.more')} />
        </div>
        <blockquote className="pullquote">{t('about.quote')}</blockquote>
      </Section>

      <Section zone="paper" labelledBy="values-title">
        <SectionHeading
          id="values-title"
          title={t('values.heading')}
          intro={t('values.intro')}
        />
        <ul className="cards-grid">
          {values.map((key) => (
            <ValueCard key={key} itemKey={key} />
          ))}
        </ul>
      </Section>

      <Section zone="sage" labelledBy="metrics-title">
        <SectionHeading id="metrics-title" title={t('metrics.heading')} />
        <ul className="metrics-grid">
          {metrics.map((key) => (
            <MetricCard key={key} itemKey={key} />
          ))}
        </ul>
      </Section>

      <Section zone="clay" labelledBy="growth-title">
        <SectionHeading id="growth-title" title={t('growth.heading')} />
        <ul className="cards-grid">
          {growth.map((key) => (
            <li key={key} className="card">
              <h3 className="card-title">{t('growth.items.' + key + '.title')}</h3>
              <p className="card-body">{t('growth.items.' + key + '.body')}</p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
