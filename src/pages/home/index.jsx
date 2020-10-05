import React from 'react';
import styled from 'styled-components';

import Card from '../../components/Card';
import PageDefault from '../../components/PageDefault';
import Image from '../../components/Image';

import Leaf from '../../assets/svg/b_leaf.svg';

export const HomeWrapper = styled.div`

`;

export default function Home() {

  const colorPrimary = 'var(--primary)';

  return (
    <PageDefault>
      <Card width="15vh" name="Counter" color={colorPrimary}>
        <Image link="/counter" src={Leaf} />
      </Card>
    </PageDefault>
  );
}
