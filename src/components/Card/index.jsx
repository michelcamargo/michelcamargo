import React from 'react';
import propTypes from 'prop-types';

import BaseCard from './styles';

function Card({
  name, label, width, children,
}) {
  return (
    <>
      <BaseCard width={width}>
        <BaseCard.Top>
          {name}
        </BaseCard.Top>
        <BaseCard.Content>
          {children}
        </BaseCard.Content>
        <BaseCard.Bottom>
          {label}
        </BaseCard.Bottom>
      </BaseCard>

    </>
  );
}

export default Card;

// Inicialização de props não obrigatórias
Card.defaultProps = {
  name: undefined,
  label: undefined,
  width: '20vh',
};

// Definição de props
Card.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  width: propTypes.string,
};
