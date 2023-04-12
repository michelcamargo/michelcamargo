'use client';

export default function ClientRootLayout({ children }) {
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
        {children}
      </body>
    </html>
  );
}