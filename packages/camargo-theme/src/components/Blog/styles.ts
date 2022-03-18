import { styled } from "frontity";
import Link from "../TemplateUi/Link";
import Image from "@frontity/components/image";

/**
 * Props of the {@link MediaContainer} component.
 */
interface MediaContainerProps {
    /**
     * Flag indicating if the component is rendered in AMP mode.
     */
    isAmp: boolean;
}

export const Text = styled.em`
  display: inline-block;
  margin-top: 16px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

export const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

export const StyledLink = styled(Link)`
  padding: 15px 0;
`;

export const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

export const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;

export const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
`;

export const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;

export const MediaContainer = styled.div<MediaContainerProps>`
  margin-top: 16px;
  height: 300px;
  ${({ isAmp }) => isAmp && "position: relative;"};
`;

export const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
