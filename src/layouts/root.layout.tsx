'use client';

export default function ClientLayout({ children }) {
  const lang = 'PTBR';
  
  if (lang !== 'PTBR') {
    return (
      <html lang="en">
        <body>
          {'root'}
          {children}
        </body>
      </html>
    );
  }
  
  return (
    <html lang="pt-BR">
      <body>
        {'root'}
        {children}
      </body>
    </html>
  );
}