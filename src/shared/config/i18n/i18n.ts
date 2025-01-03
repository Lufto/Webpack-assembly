import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: __IS__DEV__,

    interpolation: {
      escapeValue: false,
    },

		backend: {
			loadPath:'/locales/{{lng}}/{{ns}}.json'
		}
  });

export default i18n;