// 'use client';
import Link from "next/link";

export default function CommonLayout({ children }) {
  return (
    <div>
      <hr />
      <h6>Dashboard</h6>
      {children}
      <Link href={"/"}>Voltar</Link>
      <hr />
    </div>
  );
}