import styled from 'styled-components';

interface SidebarProps{
  visible: boolean;
}

export const Disclaimer = styled.div<SidebarProps>`
  position: fixed;
  top: 5.4%;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;

  background: ${props => props.theme.colors.backgroundPrimary};
  box-shadow: 0px 0px 8px 1px rgba(0,0,0,.2);

  padding: 25px;
  height: 100%;
  width: 450px;


  
  &:focus {
    outline: none;
  }
`;

Disclaimer.Title = styled.h3<SidebarProps>`
  margin-top: ${props => props.theme.spacing.large};
  margin-bottom: ${props => props.theme.spacing.medium};
  
  color: ${props => props.theme.colors.textPrimary};

  font-size: 1.4rem;
  font-weight: 600;
`;

Disclaimer.Content = styled.p<SidebarProps>`
  font-size: 1.15rem;
  font-weight: 300;

  color: ${props => props.theme.colors.textSecondary};
`;