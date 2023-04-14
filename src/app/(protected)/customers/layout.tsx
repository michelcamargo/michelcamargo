import { ReactNode } from "react";
import CommonLayout from "@/layouts/common";

interface Props {
  children: ReactNode
}

export const metadata = {
  title: 'Clientes | Michel Camargo',
  description: 'Página de clientes',
}

export default function CustomersLayout({ children }: Props) {
  return (
    <CommonLayout>
      {children}
    </CommonLayout>
  )
}
