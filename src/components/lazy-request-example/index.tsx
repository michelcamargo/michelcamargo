export async function LazyRequestExample() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const response = await fetch('http://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store'
  });
  
  const exampleData = await response.json();
  
  return (
    <div>
      <h5>Exemplo suspensão de componente</h5>
      <pre>{JSON.stringify(exampleData, null, 2)}</pre>
    </div>
  );
}