import { cookies, headers } from 'next/headers';

export async function AsyncComponentExample() {
  // usando informações de contexto
  const exampleCookies = cookies();
  const exampleHeaders = headers();
  
  const response = await fetch('http://localhost:3030/articles', {
    cache: 'no-store'
  });
  
  const articles = await response.json();
  
  return (
    <div>
      <h5>Exemplo de componente assíncrono</h5>
      <pre>{JSON.stringify(articles, null, 2)}</pre>
      
      <h5>Exemplos de dados de contexto (cookies)</h5>
      <pre>COOKIES: {JSON.stringify(exampleCookies.getAll())}</pre>
      <pre>HEADERS: {JSON.stringify(exampleHeaders.entries())}</pre>
    </div>
  );
}