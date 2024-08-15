import UnicodeBg from "@/assets/img/disclaimer/unicodebg.jpg";
import { Box, styled, Typography } from "@mui/material";

interface StyledProps {
  bold?: boolean,
  italic?: boolean,
  fontSize?: string,
}

const DisclaimerContainer = styled(Box)<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto;
`;

const DisclaimerFragment = styled(Box)<StyledProps>`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const DisclaimerText = styled(Typography)<StyledProps>`
  font-size: 12px;
  width: fit-content;
`;

export const generalStyle = {
  display: 'block',
  right: 0,
  height: 'auto',
  backgroundColor: 'transparent',
  backgroundImage: `url(${UnicodeBg.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  color: '#FFFFFF',
  width: '512px',
  marginLeft: 'auto',
  padding: '16px',
};

export const contentStyle = {
  display: 'block',
  padding: 0,
  height: 'auto',
  flex: 1,
};

export const acceptBtnStyle = {
  borderRadius: '4px',
  background: 'none',
  color: 'white',
  fontWeight: 'bold',
  padding: 0,
  textDecoration: 'underline white'
};

export const refuseBtnStyle = {
  background: 'black',
  borderRadius: '4px',
  fontWeight: 'bold',
};

export default {
  DisclaimerText,
  DisclaimerContainer,
  DisclaimerFragment
};
