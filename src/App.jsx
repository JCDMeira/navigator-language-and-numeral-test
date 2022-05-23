/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { GlobalStyle, Conteiner } from './global';
import { TranslatorProvider } from 'react-translate';
import * as lang from './languages';
import Home from './Components/Home';
import numeral from 'numeral';
import Currency from './Components/Currency';

function App() {
  const [language, setLanguage] = useState(lang.languagePt);
  const [languageOpt, setLanguageOpt] = useState('pt-BR');

  useEffect(() => {
    setLanguageOpt(navigator.language);
    if (navigator.language === 'pt-BR') setLanguage(lang.languagePt);
    if (navigator.language === 'en-US') setLanguage(lang.languageEn);
    if (navigator.language === 'es-ES') setLanguage(lang.languageEs);
    if (navigator.language === 'zh-CN') setLanguage(lang.languageCh);
  }, []);

  const handleChange = ({ target: { value } }) => {
    setLanguageOpt(value);
    if (value === 'pt-BR') setLanguage(lang.languagePt);
    if (value === 'en-US') setLanguage(lang.languageEn);
    if (value === 'es-ES') setLanguage(lang.languageEs);
    if (value === 'zh-CN') setLanguage(lang.languageCh);
  };

  return (
    <>
      <GlobalStyle />
      <Conteiner>
        <TranslatorProvider translations={language}>
          <Home />
          <Currency />
        </TranslatorProvider>
        <br />
        <select onChange={(e) => handleChange(e)} value={languageOpt}>
          <option value="pt-BR">PT</option>
          <option value="en-US">EN</option>
          <option value="es-ES">ES</option>
          <option value="zh-CN">中文</option>
        </select>
      </Conteiner>
    </>
  );
}

export default App;
