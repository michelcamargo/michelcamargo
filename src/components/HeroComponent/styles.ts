import {styled, Typography} from "@mui/material";

const HeroAuthor = styled('h1')`
  font-size: 32px;
  color: ${({ theme }) => theme && theme.palette.primary.main};
`;

const HeroContainer = styled('div')`

`;

const HeroAuthorFirstname = styled(Typography)`
  font-size: 42px;
  font-weight: bold;
`;

const HeroAuthorMiddlename = styled('span')`

`;

const HeroAuthorLastname = styled('span')`

`;

const HeroSubHeading = styled('h2')`
  display: flex;
  position: relative;
  font-size: 42px;
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
