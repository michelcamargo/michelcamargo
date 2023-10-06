import React, { ReactElement } from 'react';

import Layout from "@/components/layout";
import { ViewLayoutEnum } from "@/lib/layout";

interface Props {
  target: ReactElement,
  layout?: ViewLayoutEnum,
  bypassServerContent?: boolean,
}

const HydratedView = ({ target, layout, bypassServerContent }: Props) => {
  const serverData = target.props.serverViewData;
  
  if (layout === ViewLayoutEnum.MINIMAL) {
    return (
      <Layout.Minimal serverProps={serverData} bypassServerContent={bypassServerContent ?? false}>
        {target}
      </Layout.Minimal>
    );
  }
	
  return (
    <Layout.Common serverProps={serverData} bypassServerContent={bypassServerContent ?? false}>
      {target}
    </Layout.Common>
  );
};

export default HydratedView;
