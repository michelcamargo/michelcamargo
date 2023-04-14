'use client';
import { useState } from 'react';

// Não pode ser assíncrono
// Habilita hidratação Javascript pelo browser
export function ClientSideExample() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h5>{count}</h5>
      {/*<button onClick={() => setCount(count + 1)}>incrementar</button>*/}
      <button onClick={() => setCount((state) => state + 1)}>incrementar</button>
    </div>
  )
}