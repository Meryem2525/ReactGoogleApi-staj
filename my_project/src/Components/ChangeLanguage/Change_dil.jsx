import React from 'react'
import { useTranslation } from 'react-i18next'
import ChangeLanguageOne from './ChangeLanguageOne'
import { Link } from 'react-router-dom';

const Change_dil = () => {
     const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <p>{t('welcome_message')}</p>
     <p> <Link onClick={() => changeLanguage('tr')}>Türkçe</Link> </p>
      <Link onClick={() => changeLanguage('en')}>English</Link>
    </div>
  );

}

export default Change_dil
