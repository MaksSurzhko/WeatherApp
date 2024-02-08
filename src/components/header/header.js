// import React from 'react';
// import '../header/header.css';

// const Header = () => {
//   return (
//     <header className="app-header">
//       <h1 className="app-title">Weather App</h1>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import { useTranslation } from 'react-i18next';
import '../header/header.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="app-header">
      <h1 className="app-title">{t('title')}</h1>
      <div>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('uk')}>UK</button>
        <button onClick={() => changeLanguage('he')}>HE</button>
      </div>
    </header>
  );
};

export default Header;