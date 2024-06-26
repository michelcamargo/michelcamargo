import { Box, styled, Typography } from "@mui/material";

export interface StyledProps {
  width?: number,
}

const Wrapper = styled(Box)<StyledProps>`


`;

const Session = styled(Box)<StyledProps>`


`;

const Article = styled(Box)<StyledProps>`
  display: flex;
  flex-direction: column;
`;

const SplittedArticle = styled(Box)<StyledProps>`
  display: flex;
  flex-direction: row;
  column-gap: 48px;
`;

const LeftArticleContent = styled(Box)<StyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

const RightArticleContent = styled(Box)<StyledProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SessionHeading = styled(Typography)<StyledProps>`
  font-size: 22px;

`;

const SessionDescription = styled(Typography)<StyledProps>`
  font-size: 18px;
`;

const SessionTitle = styled(Typography)<StyledProps>`
  font-size: 18px;
  font-weight: bold;
`;

const HighlightedText = styled(Typography)<StyledProps>`
  font-size: 14px;
  color: ${({ theme }) => theme?.palette.primary.main[500] };
`;

const CommonText = styled(Typography)<StyledProps>`
  font-size: 14px;
`;

export default {
  Wrapper, Session, SessionHeading, Article, SplittedArticle, LeftArticleContent, RightArticleContent,
  SessionTitle, SessionDescription, HighlightedText, CommonText,
};
