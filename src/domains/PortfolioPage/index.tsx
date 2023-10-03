import React from 'react';

import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

interface Props {
  serverViewData: ServerViewProps,
}

const PortfolioPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  return (
    <div>
      {JSON.stringify(serverViewData)}
    </div>
  );
};

export default PortfolioPage;
