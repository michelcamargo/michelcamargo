import { styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export interface StyledProps {
  isdisabled?: boolean,
  hue?: number,
}

const LogoLink = styled(Link)<StyledProps>`
  transition: .09s ease-in;
  opacity: 1;
  
  &:hover {
    opacity: .8;
  }
`;

const LogoImage = styled(Image)<StyledProps>`
  transition-duration: .01s;
  transition-timing-function: ease;
  filter: hue-rotate(${({ hue }) => hue ? (hue + 'deg') : '0deg'});
`;

export default {
	LogoLink,
	LogoImage
};
