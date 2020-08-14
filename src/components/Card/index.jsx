import React from 'react';
import propTypes from 'prop-types';

import BaseCard from './styles';

function Card({
  name, label, width, children,
}) {
  return (
    <>
      <BaseCard
        name={name}
        width={width}
      >
        <BaseCard.Label>
          {label}
        </BaseCard.Label>
        <BaseCard.Content>
          {children}
        </BaseCard.Content>
      </BaseCard>

    </>
  );
}

export default Card;

// Inicialização de props não obrigatórias
Card.defaultProps = {
  name: '',
  label: 'No label',
  width: '20vh',
};

// Definição de props
Card.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  width: propTypes.string,
};
