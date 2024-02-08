import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: 'Weather App',
        // Add more translations as needed
      },
    },
    uk: {
      translation: {
        title: 'Погода',
        // Add more translations as needed
      },
    },
    he: {
      translation: {
        title: 'אפליקציית מזג אוויר',
        // Add more translations as needed
      },
    },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;