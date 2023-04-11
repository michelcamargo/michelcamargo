'use client'; // this directive should be at top of the file, before any imports.

export default function ClientLayout({ children }) {
  return (
    <div>
      <h2>Layout SignUp</h2>
      {children}
    </div>
  );
}