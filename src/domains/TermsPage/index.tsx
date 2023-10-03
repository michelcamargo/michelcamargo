import React from 'react';

import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

interface Props {
  serverViewData: ServerViewProps
}

const TermsPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  const termos = 'Termos de privacidade';
	
  return (
    <div>
      {termos}
    </div>
  );
};

export default TermsPage;
