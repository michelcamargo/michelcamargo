import React from 'react';

import { ServerViewProps } from "@/lib/datahooks";
import { CustomNextPage } from "@/lib/layout";

interface Props {
  serverViewData: ServerViewProps
}
const NotFoundPage: CustomNextPage<Props> = ({ serverViewData }: Props) => {
  return (
    <div>
      <p>404 NOT FOUND</p>
    </div>
  );
};

export default NotFoundPage;