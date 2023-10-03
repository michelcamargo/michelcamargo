import AppLink from "@/components/AppLink";
import { styled } from "@mui/material";

export interface StyledProps {
  callback?: () => void,
}

const SocialList = styled('div')<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
`;

const SocialItem = styled(AppLink)<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  
  font-size: 16px;
  
  &:not(&:last-child) {
    margin-right: 16px;
  }
`;

const SocialItemLabel = styled('p')<StyledProps>`
  display: block;
  justify-content: center;
  margin-left: 8px;
  text-transform: capitalize;
  color: ${({ theme }) => theme && theme.palette.primary.main};
`;

export default {
  SocialItem,
  SocialItemLabel,
  SocialList,
};
