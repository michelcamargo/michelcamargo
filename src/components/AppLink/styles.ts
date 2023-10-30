import { Link, styled } from "@mui/material";

export interface StyledProps {
  isdisabled?: boolean,
  color?: string,
  _underline?: 'static' | 'ease',
}

const Anchor = styled(Link)<StyledProps>`
  display: inline;
  position: relative;
  justify-content: center;
  align-items: center;
  text-decoration: ${({ theme, _underline, color }) =>
    _underline === 'static' ? `underline ${color ? color : theme.palette.primary.main[500]}` : 'none'};
  padding: 0;
  color: ${({ color, theme }) => color ? color : theme.palette.primary.main[500]};
  opacity: 1;
  transition: opacity 300ms ease;
  
  &::after {
    content: "";
    width: 100%;
    border-bottom: 1px solid ${({ theme, color }) => color ? color : theme.palette.primary.main[500]};
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 300ms ease;
  }

  &:hover {
    opacity: ${({ _underline }) => _underline === 'static' ? .8 : 'inherit'};
    
    &::after {
      opacity: ${({ _underline }) => _underline === 'ease' ? 1 : 0};
    }
  }
  
`;

export default {
  Anchor
};
