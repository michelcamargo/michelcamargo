import ClientAuthLayout from "@/layouts/auth.layout";

export default function Layout({ children }) {
  return (
    <ClientAuthLayout>
      {children}
    </ClientAuthLayout>
  );
}