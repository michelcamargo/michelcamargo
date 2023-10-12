import { Link, styled } from "@mui/material";

export interface StyledProps {
  isdisabled?: boolean,
  color?: string,
  noUnderline?: boolean,
}

const Anchor = styled(Link)<StyledProps>`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0;
  
  &::after {
    content: "";
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main[500]};
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 300ms ease;
  }
  
  &:hover::after {
    opacity: ${({ noUnderline }) => noUnderline ? 0 : 1};
  }
`;

export default {
  Anchor
};
