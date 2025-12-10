import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu } from "lucide-react";
import Logo from "@/components/Logo";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Leistungen", href: "/leistungen" },
    { name: "Hausverwaltungen", href: "/hausverwaltungen" },
    { name: "Partner werden", href: "/partner" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-emergency text-white py-2 text-center font-medium">
        <div className="container mx-auto px-4">
          <span className="inline-flex items-center gap-2">
            <Phone className="w-4 h-4 emergency-pulse" />
            24/7 Notdienst: 
            <a 
              href="tel:+436766166646" 
              className="underline hover:no-underline font-bold"
              data-testid="emergency-banner-phone"
            >
              0676 6166646
            </a>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3" data-testid="logo-link">
              <Logo className="w-11 h-11 text-primary" />
              <div>
                <div className="font-bold text-xl text-primary">Notprofi24</div>
                <div className="text-xs text-muted-foreground">Österreichweit für Sie da</div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    isActive(item.href) 
                      ? "text-primary" 
                      : "text-foreground hover:text-primary"
                  }`}
                  data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a 
                href="tel:+436766166646" 
                className="bg-emergency text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center gap-2"
                data-testid="header-phone-button"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Jetzt anrufen</span>
              </a>
              
              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="outline" size="icon" data-testid="mobile-menu-trigger">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navigation.map((item) => (
                      <Link 
                        key={item.href}
                        href={item.href}
                        className={`text-lg font-medium transition-colors p-2 rounded ${
                          isActive(item.href) 
                            ? "text-primary bg-primary/10" 
                            : "text-foreground hover:text-primary hover:bg-muted"
                        }`}
                        onClick={() => setIsOpen(false)}
                        data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
