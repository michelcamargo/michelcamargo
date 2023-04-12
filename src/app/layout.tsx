import './globals.scss'
import { ReactNode } from "react";
import ClientRootLayout from "@/layouts/root.layout";

interface Props {
  children: ReactNode
}

export const metadata = {
  title: 'Michel Camargo',
  description: 'Aplicação NextJs 13 (BETA)',
}

// NÃO MUDA QUANDO A APP MUDA
export default function RootLayout({ children }: Props) {
  return (
    <ClientRootLayout>
      {children}
    </ClientRootLayout>
  )
}
