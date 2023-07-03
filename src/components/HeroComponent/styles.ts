import { styled } from "@mui/material";

const HeroAuthor = styled('h1')`
  font-size: 32px;
  color: ${({ theme }) => theme && theme.palette.primary.main};
`;

const HeroContainer = styled('div')`

`;

const HeroAuthorFirstname = styled('span')`

`;

const HeroAuthorMiddlename = styled('span')`

`;

const HeroAuthorLastname = styled('span')`

`;

const HeroDescription = styled('h2')`
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
  HeroDescription,
  HeroDescriptionText,
};
