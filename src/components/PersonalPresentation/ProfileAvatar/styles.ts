import { styled } from "@mui/material";
import Image from 'next/image';

export interface StyledProps {
	width?: number,
	height?: number,
}

const Wrapper = styled('div')<StyledProps>`
	display: flex;
`;

const Avatar = styled(Image)<StyledProps>`
	position: relative;
	display: block;
	border-radius: 100%;
`;

export default {
  Wrapper, Avatar
};
