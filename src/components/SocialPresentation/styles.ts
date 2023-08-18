import { Link, styled } from "@mui/material";

const SocialList = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SocialItem = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  &:not(&:last-child) {
    margin-right: 16px;
  }
`;

const SocialItemLabel = styled('p')`
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
