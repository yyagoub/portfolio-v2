import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ar from './locales/ar.json';

export const LANGS = {
  en: { dir: 'ltr', label: 'English' },
  ar: { dir: 'rtl', label: 'العربية' },
};

const STORAGE_KEY = 'portfolio-lang';

function getInitialLang() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && LANGS[saved]) return saved;
  } catch (e) {
    /* localStorage unavailable */
  }
  return 'en';
}

const initialLang = getInitialLang();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: initialLang,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  returnObjects: true,
});

// Keep <html lang>/<dir> and persisted choice in sync with the active language.
export function applyDocumentLang(lng) {
  const meta = LANGS[lng] || LANGS.en;
  document.documentElement.setAttribute('lang', lng);
  document.documentElement.setAttribute('dir', meta.dir);
  try {
    window.localStorage.setItem(STORAGE_KEY, lng);
  } catch (e) {
    /* ignore */
  }
}

applyDocumentLang(initialLang);
i18n.on('languageChanged', applyDocumentLang);

export default i18n;
