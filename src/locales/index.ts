import {getLocales} from 'react-native-localize';
import lodashGet from 'lodash/get';
import en from './en';
import es from './es';

const translate = (phraseKey: string) => {
  const [desiredLang] = getLocales();
  const langKeys = lodashGet({en, es}, desiredLang.languageCode);
  const result = lodashGet(langKeys, phraseKey);
  return result;
};

export default translate;
