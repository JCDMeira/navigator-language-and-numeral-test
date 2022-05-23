/*
  Arquivo centralizador de idiomas para muitos componentes.
  Fazendo um arquivo em cada pasta de componente é possível
  isolar todos os textos usados pelo componente, e então
  centralizar no arquivo index de translate
*/
import { homeEn, homePt, homeEs, homeCh } from '../Components/Home/translate';
import {
  CurrencyEn,
  CurrencyPt,
  CurrencyEs,
  CurrencyCh,
} from '../Components/Currency/translate';

const languageEn = {
  locale: 'en-US',
  ...homeEn,
  ...CurrencyEn,
};
const languagePt = {
  locale: 'pt-BR',
  ...homePt,
  ...CurrencyPt,
};
const languageEs = {
  locale: 'es-ES',
  ...homeEs,
  ...CurrencyEs,
};
const languageCh = {
  locale: 'zh-CH ',
  ...homeCh,
  ...CurrencyCh,
};

export { languageEn, languagePt, languageEs, languageCh };
