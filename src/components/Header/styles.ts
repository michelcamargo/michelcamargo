import styled from 'styled-components';

interface HeaderProps {
    fullWidth?: boolean;
    sticky?: boolean;
    color?: string;
    fontSize?: string;
    bgColor?: string;
}

export const HeaderWrapper = styled.div<HeaderProps>`
  width: 100%;
  position: relative;
  
  padding-top: ${props => props.theme.spacing.medium};
  padding-bottom: ${props => props.theme.spacing.medium};
  
  background: ${props => props.bgColor ? props.bgColor : props.theme.colors.backgroundPrimary};
`;

export const HeaderContainer = styled.div<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: ${props => props.fullWidth ? `0 ${props.theme.spacing.large}` : `0 ${props.theme.spacing.medium}`};
  margin: ${props => props.fullWidth ? undefined : "0 auto"};
  max-width: ${props => props.fullWidth ? undefined : props.theme.containerWidth};
`;


