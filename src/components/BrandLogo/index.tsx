import React, { useState } from 'react';

import circleFillColorLogo from '@/assets/svg/brand/logo_circlefill_color.svg';

import Styled from './styles';

interface Props {
  width?: number,
  height?: number,
}

const BrandLogo = ({ width = 48, height = 48 }: Props) => {
  const brandLogoImg = circleFillColorLogo;
  
  const [logoHueDegree, setLogoHueDegree] = useState(0);
  
  const handleMouseHover = () => {
    setLogoHueDegree(logoHueDegree + 3.33);
  };
  
  return (
    <Styled.LogoLink href={'/'} hue={logoHueDegree} onMouseMove={handleMouseHover} onClick={() => setLogoHueDegree(0)}>
      <Styled.LogoImage src={brandLogoImg} alt={"Logo da marca"} width={width} height={height} hue={logoHueDegree} />
    </Styled.LogoLink>
  );
};

export default BrandLogo;
