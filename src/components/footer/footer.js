import React from 'react';
import foocss from './footer.module.css';
import { useTranslation } from 'react-i18next';
import logo from '../img/logo.png'

const Footer = () => {

    const { t } = useTranslation()

  return (
      <footer className={foocss.footer}>
          <div className={foocss.fooBox}>
          {/* <h1 className={foocss.title}>{t('title')}</h1> */}
              <a className={foocss.link} href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer">
                <img  src={logo} alt="Logo" className={foocss.logo} />
              </a>
          </div>
      <p></p>
    </footer>
  );
};

export default Footer;