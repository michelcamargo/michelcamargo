import React, { ReactNode } from 'react';

import { Container } from './styles';

interface Props{
  children?: ReactNode;
}

function Contato({children}: Props) {
  return <Container />;
}

export default Contato;