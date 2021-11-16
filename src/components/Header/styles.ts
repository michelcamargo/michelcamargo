import styled from 'styled-components';

interface HeaderProps {
    fullWidth?: boolean;
    sticky?: boolean;
    color?: string;
    fontSize?: string;
    background?: string;
}

export const HeaderWrapper = styled.div<HeaderProps>`
  width: 100%;
  position: relative;
  
  padding-top: ${props => props.theme.spacing.medium};
  padding-bottom: ${props => props.theme.spacing.medium};
  
  background: ${props => props.background ? props.background : props.theme.colors.backgroundPrimary};
  box-shadow: ${props => props.theme.shadow};
`;

export const HeaderContainer = styled.div<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-left: ${props => props.fullWidth ? props.theme.spacing.large : props.theme.spacing.medium};
  padding-right: ${props => props.fullWidth ? props.theme.spacing.large : props.theme.spacing.medium};
  margin: ${props => props.fullWidth ? undefined : "0 auto"};
  max-width: ${props => props.fullWidth ? undefined : props.theme.containerWidth};
`;


