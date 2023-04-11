import './globals.scss'
import { ReactNode } from "react";
import ClientLayout from "@/layouts/root.layout";

interface Props {
  children: ReactNode
}

export const metadata = {
  title: 'Michel Camargo',
  description: 'Aplicação NextJs 13 (BETA)',
}

export default function RootLayout({ children }: Props) {
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  )
}
