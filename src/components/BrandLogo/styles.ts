import { styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export interface StyledProps {
  isdisabled?: boolean,
  hue?: number,
}

const LogoLink = styled(Link)<StyledProps>``;

const LogoImage = styled(Image)<StyledProps>`
  transition: .09s ease-in;
  opacity: 1;
  filter: hue-rotate(${({ hue }) => hue ? (hue + 'deg') : '0deg'});
  
  &:hover {
    opacity: .8;
  }
`;

export default {
  LogoLink,
  LogoImage
};
