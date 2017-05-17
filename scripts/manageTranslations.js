const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'lang/.messages',
  translationsDirectory: 'lang/',
  languages: ['ka'],
});
