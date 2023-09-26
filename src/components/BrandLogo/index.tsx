import React from 'react';

import circleFillColorLogo from '@/assets/svg/brand/logo_circlefill_color.svg';

import Styled from './styles';

interface Props {
  width?: number,
  height?: number,
}

const BrandLogo = ({ width = 48, height = 48 }: Props) => {
  const brandLogoImg = circleFillColorLogo;
  
  return (
    <Styled.LogoLink href={'/'}>
      <Styled.LogoImage src={brandLogoImg} alt={"Logo da marca"} width={width} height={height} />
    </Styled.LogoLink>
  );
};

export default BrandLogo;
