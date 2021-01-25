import React from 'react';

import SepBar from './styles';

interface Props {
  color?: string;
  width?: string;
  radius?: string;
}

function Separator({color, width, radius}: Props) {
  return <SepBar color={color} width={width} radius={radius} />
}

export default Separator;
