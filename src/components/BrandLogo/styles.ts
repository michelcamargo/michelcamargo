import { styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export interface StyledProps {
  isdisabled?: boolean,
  hue?: number,
}

const LogoLink = styled(Link)<StyledProps>``;

const LogoImage = styled(Image)<StyledProps>`
  filter: hue-rotate(${({ hue }) => hue ? (hue + 'deg') : '0deg'});
`;

export default {
  LogoLink,
  LogoImage
};
