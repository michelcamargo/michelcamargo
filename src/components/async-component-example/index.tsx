import React from 'react';

export async function AsyncComponentExample() {
  
  const response = await fetch('http://localhost:3030/articles', {
    cache: 'no-store'
  });
  
  const articles = await response.json();
  
  return (
    <div>
      <pre>{JSON.stringify(articles, null, 2)}</pre>
    </div>
  );
}