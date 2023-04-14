import { ReactNode } from "react";
import DashboardLayout from "@/layouts/dashboard";

interface Props {
  children: ReactNode
}

export const metadata = {
  title: 'Dashboard | Michel Camargo',
  description: 'Página de clientes',
}

export default function AuthLayout({ children }: Props) {
  return (
    <DashboardLayout>
      {children}
    </DashboardLayout>
  )
}
