import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EmergencyModal from "./EmergencyModal";
import PartnerModal from "./PartnerModal";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
      <EmergencyModal />
      <PartnerModal />
    </div>
  );
}
