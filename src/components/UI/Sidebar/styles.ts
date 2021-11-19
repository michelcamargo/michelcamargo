import styled from 'styled-components';
import {shade} from 'polished';

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

  padding: ${props => props.theme.spacing.large};
  height: 100%;
  width: 400px;
  
  &:focus {
    outline: none;
  }
`;

Disclaimer.Title = styled.h3<SidebarProps>`
  color: ${props => props.theme.colors.textPrimary};

  font-size: ${props => props.theme.fontSize.medium};
  font-weight: 600;
`;

Disclaimer.Content = styled.p<SidebarProps>`
  display: inline-block;
  font-size: ${props => props.theme.fontSize.small};
  font-weight: 300;

  color: ${props => props.theme.colors.textSecondary};
`;

export const SidebarHeader = styled.div<SidebarProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${props => props.theme.spacing.medium};
`;

export const SidebarCloseButton = styled.button<SidebarProps>`
  background: ${props => props.theme.colors.backgroundPrimary};
  box-shadow: ${props => props.theme.shadow};
  padding: 11px 15px;
  border-radius: ${props => props.theme.borderRadius.large};
  cursor: pointer;
  
  &:active, &:focus, &:target {
    background: ${props => shade(0.2, props.theme.colors.backgroundPrimary)};
  }
`;