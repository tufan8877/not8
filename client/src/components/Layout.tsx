import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "./Header";
import Footer from "./Footer";
import EmergencyModal from "./EmergencyModal";
import PartnerModal from "./PartnerModal";

interface LayoutProps {
  children: ReactNode;
}

function ScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.history.scrollRestoration = "manual";

    const hash = window.location.hash?.replace("#", "");

    if (hash) {
      const scrollToHash = () => {
        const element = document.getElementById(hash);
        if (!element) {
          window.scrollTo({ top: 0, behavior: "auto" });
          return;
        }

        const headerOffset = 140;
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const targetTop = Math.max(elementTop - headerOffset, 0);

        window.scrollTo({ top: targetTop, behavior: "auto" });
      };

      const timeout = window.setTimeout(scrollToHash, 60);
      return () => window.clearTimeout(timeout);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return null;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <ScrollManager />
      <Header />
      <main>{children}</main>
      <Footer />
      <EmergencyModal />
      <PartnerModal />
    </div>
  );
}
