import React, { useEffect } from 'react';
import { HashRouter as BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';
import './style.css';
import TopNav from './components/TopNav';
import Routes from './util/routes';
import Icon from './components/Icon';
import { contactChannels } from './data/site';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-tagline">{t('footer.tagline')}</p>
        <ul className="footer-social" aria-label={t('sidebar.social')}>
          {contactChannels.map((c) => (
            <li key={c.key}>
              <a
                href={c.url}
                target={c.icon === 'mail' ? undefined : '_blank'}
                rel={c.icon === 'mail' ? undefined : 'noopener noreferrer'}
                aria-label={t('contact.channels.' + c.key + '.label')}
              >
                <Icon name={c.icon} size={20} />
              </a>
            </li>
          ))}
        </ul>
        <p className="footer-rights">
          © {new Date().getFullYear()} {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('meta.title');
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description'));
  }, [t]);

  return (
    <BrowserRouter>
      <a className="skip-link" href="#main">
        {t('nav.skipToContent')}
      </a>
      <TopNav />
      <main id="main" tabIndex="-1">
        <Routes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
