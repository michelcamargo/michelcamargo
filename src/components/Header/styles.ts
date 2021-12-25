import styled from 'styled-components';

interface HeaderProps {
    isFullWidth?: boolean;
    isSticky?: boolean;
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

  transition: ${props => props.theme.transition};
`;

export const HeaderContent = styled.div<HeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainer = styled.div<HeaderProps>`
  padding-left: ${props => props.isFullWidth ? props.theme.spacing.large : props.theme.spacing.medium};
  padding-right: ${props => props.isFullWidth ? props.theme.spacing.large : props.theme.spacing.medium};
  margin: ${props => props.isFullWidth ? undefined : "0 auto"};
  max-width: ${props => props.isFullWidth ? undefined : props.theme.containerWidth};
`;

export const HeaderLogo = styled.a<HeaderProps>`
    
`;


