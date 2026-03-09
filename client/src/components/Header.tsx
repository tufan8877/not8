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
      <div className="border-b border-slate-800 bg-slate-950 text-slate-200">
        <div className="container mx-auto flex flex-col gap-2 px-4 py-3 text-sm md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 font-medium">
            <Phone className="h-4 w-4 text-slate-400" />
            <span>Zentrale Notfall-Koordination · 24/7 erreichbar</span>
          </div>
          <a
            href="tel:+436766166646"
            className="font-semibold text-white transition hover:text-slate-300"
            data-testid="emergency-banner-phone"
          >
            0676 6166646
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center gap-3" data-testid="logo-link">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-900 shadow-sm">
                <Logo className="h-7 w-7" />
              </div>
              <div>
                <div className="text-xl font-semibold tracking-tight text-slate-950">Notprofi24</div>
                <div className="text-xs font-medium text-slate-500">Österreichweit für Sie da</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1.5">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-white text-slate-950 shadow-sm"
                      : "text-slate-600 hover:text-slate-950"
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
                className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                data-testid="header-phone-button"
              >
                <Phone className="h-4 w-4" />
                Anrufen
              </a>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="outline" size="icon" className="border-slate-300" data-testid="mobile-menu-trigger">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[380px] border-slate-200 bg-white">
                  <div className="mt-8 flex items-center gap-3 border-b border-slate-200 pb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-900">
                      <Logo className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-950">Notprofi24</div>
                      <div className="text-xs text-slate-500">Österreichweit für Sie da</div>
                    </div>
                  </div>

                  <nav className="mt-6 flex flex-col gap-2">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive(item.href)
                            ? "bg-slate-100 text-slate-950"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                        }`}
                        onClick={() => setIsOpen(false)}
                        data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <a
                    href="tel:+436766166646"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
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
