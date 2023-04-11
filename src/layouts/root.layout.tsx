'use client';

export default function ClientLayout({ children }) {
  const lang = 'PTBR';
  
  if (lang !== 'PTBR') {
    return (
      <html lang="en">
        <body>
          <h2>Layout root</h2>
          {children}
        </body>
      </html>
    );
  }
  
  return (
    <html lang="pt-BR">
      <body>
        <h2>Layout root (ptbr)</h2>
        {children}
      </body>
    </html>
  );
}