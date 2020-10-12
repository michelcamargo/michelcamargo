import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import Embed from './styles';

function Linked({ children, to }) {
  return (
    <Embed>
      <Link to={to}>{children}</Link>
    </Embed>
  );
}

export default Linked;

// Inicialização de props não obrigatórias
Linked.defaultProps = {
  to: '/',
};

// Definição de props
Linked.propTypes = {
  to: propTypes.string,
  children: propTypes.node.isRequired,
};
