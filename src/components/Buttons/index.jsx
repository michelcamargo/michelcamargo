import React from 'react';

import LinkButton from './styles';

function Buttons({ children, link }) {
  return (
    <LinkButton to={link}>
      {children}
    </LinkButton>
  );
}

export default Buttons;
