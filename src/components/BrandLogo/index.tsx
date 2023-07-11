import React from 'react';

import circleFillColorLogo from '@/assets/svg/brand/logo_circlefill_color.svg';
import Image from "next/image";

interface Props {
  width?: number,
  height?: number,
}

const BrandLogo = ({ width = 48, height = 48 }: Props) => {
  const brandLogoImg = circleFillColorLogo;
  
  return (
    <div>
      <Image src={brandLogoImg} alt={"Logo da marca"} width={width} height={height} />
    </div>
  );
};

export default BrandLogo;
