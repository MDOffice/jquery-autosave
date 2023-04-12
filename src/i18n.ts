const i18n = require('./i18n-data.json');
let currentLang = 'en';
export function setLanguage(id: string) {
  currentLang = id;
}
export function t(text: string) {
  return (i18n[currentLang] && i18n[currentLang][text]) || text;
}
