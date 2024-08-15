import { styled, Typography } from "@mui/material";

const HeroContainer = styled('div')`
  padding-top: 32px;
  //padding-bottom: 16px;
`;

const HeroAuthor = styled('h1')`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: ${({ theme }) => theme && theme.palette.primary.main};
  column-gap: 8px;
`;

const HeroAuthorFirstname = styled(Typography)`
  font-size: 48px;
  font-weight: normal;
`;

const HeroAuthorMiddlename = styled('span')`

`;

const HeroAuthorLastname = styled('span')`
  font-size: 48px;
  font-weight: bold;
  
`;

const HeroSubHeading = styled('h2')`
  display: flex;
  position: relative;
  font-size: 42px;
  margin-bottom: 16px;
`;

const HeroSubHeadingText = styled('span')`

`;

const HeroDescription = styled('p')`
  display: flex;
  position: relative;
  font-size: 42px;
`;

const HeroDescriptionText = styled('span')`

`;

export default {
  HeroAuthor,
  HeroContainer,
  HeroAuthorFirstname,
  HeroAuthorMiddlename,
  HeroAuthorLastname,
  HeroSubHeading,
  HeroSubHeadingText,
  HeroDescription,
  HeroDescriptionText,
};
