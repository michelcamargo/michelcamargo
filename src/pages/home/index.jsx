import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import Card from '../../components/Card';
import PageDefault from '../../components/PageDefault';
import Image from '../../components/Image';

import Leaf from '../../assets/svg/b_leaf.svg';

export const HomeWrapper = styled.div`

`;

function Exemplo() {
  const [count, setCount] = useState(0);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Contador
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <PageDefault>
      <Card width="25vh" label="ola" name="title">
        <Image link="/leafer" src={Leaf} />
      </Card>

      {Exemplo()}
    </PageDefault>
  );

  
}
