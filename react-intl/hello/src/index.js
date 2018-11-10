import React from 'react';
import ReactDOM from 'react-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import Hello from './components/Hello';

// JSON files
import messages_en from "./translations/en.json";
import messages_es from "./translations/es.json";

// load the locale data for languages we want to support
import locale_en from 'react-intl/locale-data/en';
import locale_es from 'react-intl/locale-data/es';

// add locale data
addLocaleData([...locale_en, ...locale_es]);

const messages = {
  en: messages_en,
  es: messages_es
};

 // get language without region code
const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <Hello />
  </IntlProvider>,
  document.getElementById('root')
);
