import { Box, styled } from "@mui/material";

interface Props {
  key?: string,
}

const PortfolioCaseWrapper = styled('li')<Props>``;

const PortfolioCaseContent = styled(Box)<Props>`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(3)};
`;

const CaseBrandName = styled('h6')<Props>`
  font-size: 18px;
`;

const CaseTitle = styled('h5')<Props>`
  font-size: 22px;
`;

const CaseDescription = styled('p')<Props>`
  font-size: 14px;
`;

export default {
  PortfolioCaseWrapper,
  PortfolioCaseContent,
  CaseBrandName,
  CaseTitle,
  CaseDescription,
};
