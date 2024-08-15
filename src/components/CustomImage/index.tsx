import React from 'react';

import AppLink from "@/components/AppLink";
import Image from "next/image";

interface Props {
	alt: string,
	src: string,
	width?: number,
	height?: number,
	anchor?: string,
}

const CustomImage = ({ alt, src, width, height, anchor }: Props) => {
  if (anchor) {
    return (
      <AppLink href={anchor}>
        <Image width={width ?? 42} height={height ?? 42} alt={alt} src={src} />
      </AppLink>
    );
  }
	
  return (
    <Image width={width ?? 42} height={height ?? 42} alt={alt} src={src} />
  );
};

export default CustomImage;
