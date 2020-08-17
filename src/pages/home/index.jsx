import React from 'react';
import styled from 'styled-components';

import Card from '../../components/Card';
import PageDefault from '../../components/PageDefault';
import Image from '../../components/Image';

import Leaf from '../../assets/svg/b_leaf.svg';

export const HomeWrapper = styled.div`

`;

export default function Home() {
  return (
    <PageDefault>
      <Card width="10vh" label="Leaf" name="teste">
        <Image link="/leafer" src={Leaf} />
      </Card>
    </PageDefault>
  );
}
