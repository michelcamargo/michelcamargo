import { ReactNode } from "react";
import AuthenticationLayout from "@/layouts/authentication";

interface Props {
  children: ReactNode
}

export const metadata = {
  title: 'Clientes | Michel Camargo',
  description: 'Página de clientes',
}

export default function AuthLayout({ children }: Props) {
  return (
    <AuthenticationLayout>
      {children}
    </AuthenticationLayout>
  )
}
