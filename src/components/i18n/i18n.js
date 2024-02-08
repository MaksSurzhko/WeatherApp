import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: 'Weather App',
        Remove: 'Remove',
        searchBarPlaceholder: 'Enter city name',
        searchBarButton: 'Search',
        // Add more translations as needed
      },
    },
    uk: {
      translation: {
        title: 'Погода',
        Remove: 'Видалити',
        searchBarPlaceholder: 'Введіть назву міста',
        searchBarButton: 'Пошук',
        // Add more translations as needed
      },
    },
    he: {
      translation: {
        title: 'אפליקציית מזג אוויר',
        Remove: 'מחק',
        searchBarPlaceholder: 'הזן את שם העיר',
        searchBarButton: 'חיפוש',
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