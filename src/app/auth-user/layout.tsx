import ClientLayout from "@/layouts/auth-user.layout";

export default function Layout({ children }) {
  return (
    <ClientLayout>
      {children}
    </ClientLayout>
  );
}