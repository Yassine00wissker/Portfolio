import i18n  from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import en from "./locales/translationEN.json"
import fr from "./locales/translationFR.json"
import ar from "./locales/translationAR.json"

i18n.use(initReactI18next)
    .init({
        resources: {
            en: { translation: en},
            fr: { translation: fr},
            ar: { translation: ar},
        },
        lng : 'en',
        fallbacking: 'en',
        interpolation: { escapeValue: false}
    })

export default i18n;