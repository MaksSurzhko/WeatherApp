import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const storedLanguage = localStorage.getItem('language');

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: 'Your weather',
        Remove: 'Remove',
        searchBarPlaceholder: 'Enter city name',
        searchBarButton: 'Search',
        FeelsLike: 'Feels like',
        Wind: 'Wind',
        Celsius: '°C',
        Fahrenheit: '°F',
      },
    },
    ua: {
      translation: {
        title: 'Твоя погода',
        Remove: 'Видалити',
        searchBarPlaceholder: 'Введіть назву міста',
        searchBarButton: 'Пошук',
        FeelsLike: 'Відчувається як',
        Wind: 'Вітер',
        Celsius: '°C',
        Fahrenheit: '°F',
      },
    },
    he: {
      translation: {
        title: 'אפליקציית מזג אוויר',
        Remove: 'מחק',
        searchBarPlaceholder: 'הזן את שם העיר',
        searchBarButton: 'חיפוש',
        FeelsLike: 'מרגיש כמו',
        Wind: 'רוח',
        Celsius: '°C',
        Fahrenheit: '°F',
      },
    },
  },
  lng: storedLanguage || 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

