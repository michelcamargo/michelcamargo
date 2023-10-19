import React, { useEffect, useState } from 'react';

import circleFillColorLogo from '@/assets/svg/brand/logo_circlefill_color.svg';
import { randomXToY } from "@/helpers/math";

import Styled from './styles';

interface Props {
  width?: number,
  height?: number,
}

const BrandLogo = ({ width = 52, height = 52 }: Props) => {
  const brandLogoImg = circleFillColorLogo;
  
  const [logoHueDegree, setLogoHueDegree] = useState(0);
  const [rainbow, setRainbow] = useState(false);

  const rainbowTrigger = () => {
    setRainbow(true);
    setTimeout(() => setRainbow(false), 1500);
  };
  
  const rotateHue = () => {
    if (rainbow) {
      const modifier = randomXToY(1, 5);
      
      setLogoHueDegree(prevState => (prevState + modifier) < 360
        ? prevState + modifier
        : 360 - prevState);
    }
  };
  
  useEffect(() => {
    setTimeout(rotateHue, randomXToY(50, 500));
  }, [rainbow, rotateHue]);
  
  return (
    <Styled.LogoLink
      href={'/'}
      hue={logoHueDegree}
      onMouseEnter={() => rainbowTrigger()}
    >
      <Styled.LogoImage src={brandLogoImg} alt={"Logo da marca"} width={width} height={height} hue={logoHueDegree} />
    </Styled.LogoLink>
  );
};

export default BrandLogo;
