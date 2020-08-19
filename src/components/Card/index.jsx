import React from 'react';
import propTypes from 'prop-types';

import BaseCard from './styles';

function Card({
  name, label, width, children,
}) {
  // eslint-disable-next-line no-unneeded-ternary
  const hasName = name ? true : false;
  // Ambos se comportam da mesma forma
  const hasLabel = !!label;

  return (
    <>
      <BaseCard width={width}>
        <BaseCard.Top hasName={hasName}>
          { hasName && name }
        </BaseCard.Top>
        <BaseCard.Content>
          {children}
        </BaseCard.Content>
        <BaseCard.Bottom hasLabel={hasLabel}>
          { hasLabel && label }
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
  width: '25vh',
};

// Definição de props
Card.propTypes = {
  label: propTypes.string,
  name: propTypes.string,
  width: propTypes.string,
  children: propTypes.node.isRequired,
};
