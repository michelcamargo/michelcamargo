import { styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export interface StyledProps {}

const LogoLink = styled(Link)<StyledProps>``;

const LogoImage = styled(Image)<StyledProps>``;

export default {
  LogoLink,
  LogoImage
};
