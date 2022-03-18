import { styled } from "frontity";

type HeaderProps = {
    containerWidth?: string
    background?: string
}

export const Wrapper = styled.header<HeaderProps>`
  display: flex;
  flex-direction: column;
  background: ${props => props.background && props.background};
`;

export const Container = styled.div<HeaderProps>`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: ${props => props.containerWidth && props.containerWidth};
`;

export const Content = styled.div<HeaderProps>`
  padding-left: 1rem;
  padding-right: 1rem;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;