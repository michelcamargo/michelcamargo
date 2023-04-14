// 'use client';

import Link from "next/link";

export default function AuthenticationLayout({ children }) {
  return (
    <div>
      <hr />
      <h6>Layout Auth</h6>
      {children}
      <Link href={"/"}>Voltar</Link>
      <hr />
    </div>
  );
}