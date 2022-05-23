import React from 'react';
import useTextTranslate from '../../hooks/useTextTranslate.hook';
import numeral from 'numeral';

function Currency() {
  return (
    <>
      <h1> {useTextTranslate('Currency', 'CurrencyValue')} </h1>;
      <h1> {numeral(30).format(useTextTranslate('Currency', 'format'))} </h1>
      <h1>
        {' '}
        Numeral não formata qualquer tipo de modeda. Formata numeros para
        diversos formatos, e alguns de dinheiro{' '}
      </h1>
    </>
  );
}

export default Currency;
