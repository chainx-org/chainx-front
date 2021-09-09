import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';
import zhTrans from './locales/zh-cn.json'
import enTrans from './locales/en-us.json'
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources : {
            en:{
                translation: zhTrans
            },
            zh:{
                translation:enTrans
            }
        },
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
