import React, { useState, useEffect } from 'react';

import Container from './styles';
import PageDefault from '../../components/PageDefault';

export default function Counter() {
  const [count, setCount] = useState(0);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    document.title = `Você clicou ${count} vezes`;
  });

  return (
    <PageDefault>
      <Container>
        <p>Você clicou {count} vezes</p>
        <button onClick={() => setCount(count + 1)}>
          Contador
        </button>
      </Container>
    </PageDefault>
  );
}