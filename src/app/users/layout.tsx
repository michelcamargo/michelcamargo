import ClientCommonLayout from "@/layouts/common.layout";

export default function Layout({ children }) {
  return (
    <ClientCommonLayout>
      {children}
    </ClientCommonLayout>
  );
}