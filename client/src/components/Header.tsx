import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Phone, Menu, ChevronRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Startseite", href: "/" },
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
      <div className="bg-slate-900 text-white">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-2 text-sm">
          <div className="hidden sm:block text-white/75">
            Österreichweite Koordination für technische Notfälle und dringende Einsätze
          </div>
          <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:justify-end">
            <span className="text-white/70">24/7 erreichbar</span>
            <a
              href="tel:+436766166646"
              className="inline-flex items-center gap-2 font-semibold text-white transition-opacity hover:opacity-85"
              data-testid="emergency-banner-phone"
            >
              <Phone className="h-4 w-4" />
              0676 6166646
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border/80 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4 lg:py-5">
            <Link href="/" className="flex items-center gap-4" data-testid="logo-link">
              <Logo className="h-12 w-12 text-primary" />
              <div>
                <div className="text-lg font-semibold tracking-[0.16em] text-primary uppercase">Notprofi24</div>
                <div className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  Koordination von Notdiensten
                </div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-[0.08em] uppercase transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground/75 hover:text-primary"
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
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary/90"
                data-testid="header-phone-button"
              >
                <Phone className="h-4 w-4" />
                Notruf anrufen
              </a>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="outline" size="icon" className="rounded-full" data-testid="mobile-menu-trigger">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[320px] border-l border-border bg-white sm:w-[380px]">
                  <div className="mt-8 border-b border-border pb-6">
                    <div className="mb-1 text-lg font-semibold text-primary">Notprofi24</div>
                    <p className="text-sm text-muted-foreground">
                      Seriöse Einsatzkoordination für Hausverwaltungen, Unternehmen und Privatkunden.
                    </p>
                  </div>
                  <nav className="mt-6 flex flex-col">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center justify-between border-b border-border/70 py-4 text-base transition-colors ${
                          isActive(item.href)
                            ? "font-semibold text-primary"
                            : "text-foreground/80 hover:text-primary"
                        }`}
                        onClick={() => setIsOpen(false)}
                        data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </nav>
                  <a
                    href="tel:+436766166646"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
                  >
                    <Phone className="h-4 w-4" />
                    0676 6166646
                  </a>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
