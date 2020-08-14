import React from 'react';
import styled from 'styled-components';

import Card from '../../components/Card';
import PageDefault from '../../components/PageDefault';

export const HomeWrapper = styled.div`

`;

export default function Home() {
  return (
    <PageDefault>
      <Card name="primeiro" label="label1">
        Content
      </Card>
    </PageDefault>
  );
}
