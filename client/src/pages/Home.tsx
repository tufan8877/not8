import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import EmergencyModal from "@/components/EmergencyModal";
import PartnerModal from "@/components/PartnerModal";
import {
  Phone,
  ArrowRight,
  Clock3,
  MapPin,
  ShieldCheck,
  Wrench,
  Zap,
  KeyRound,
  Building2,
  PanelsTopLeft,
  Check,
  MessageSquare,
} from "lucide-react";

export default function Home() {
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  const services = [
    {
      icon: Wrench,
      title: "Installateur",
      description: "Koordination bei Rohrbruch, Verstopfung, Heizungsausfall und Wasserschaden.",
    },
    {
      icon: Zap,
      title: "Elektriker",
      description: "Schnelle Organisation bei Stromausfall, Sicherungsfehler und elektrischen Störungen.",
    },
    {
      icon: KeyRound,
      title: "Schlosser",
      description: "Türöffnungen, Schlossprobleme und Soforthilfe nach Schäden oder Aussperrungen.",
    },
    {
      icon: PanelsTopLeft,
      title: "Dachdecker",
      description: "Notmaßnahmen bei Sturmschäden, Undichtheiten und beschädigten Dachflächen.",
    },
    {
      icon: Building2,
      title: "Glaser",
      description: "Absicherung und Austausch bei Glasbruch, Einbruchschäden und beschädigten Elementen.",
    },
  ];

  const principles = [
    "Ein zentraler Ansprechpartner für mehrere Gewerke",
    "Seriöse, strukturierte und nachvollziehbare Einsatzkoordination",
    "Geeignet für Hausverwaltungen, Unternehmen und Privatkunden",
    "Österreichweite Erreichbarkeit und verlässliche Kommunikation",
  ];

  const states = [
    "Wien",
    "Niederösterreich",
    "Oberösterreich",
    "Steiermark",
    "Tirol",
    "Salzburg",
    "Kärnten",
    "Vorarlberg",
    "Burgenland",
  ];

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Notprofi24",
            url: "https://notprofi24.at",
            telephone: "+436766166646",
            areaServed: "AT",
            serviceType: "Koordination von Notdiensten",
          }),
        }}
      />

      <section className="border-b border-border bg-[linear-gradient(180deg,#f6f7f8_0%,#eef1f4_100%)]">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                Österreichweite Notdienst-Koordination
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-primary md:text-5xl lg:text-6xl">
                Verlässlich organisiert, wenn rasche Hilfe erforderlich ist.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/72 md:text-xl">
                Notprofi24 koordiniert qualifizierte Fachbetriebe für dringende Einsätze in den Bereichen Sanitär,
                Elektro, Schloss, Dach und Glas. Sachlich, strukturiert und mit einem zentralen Ansprechpartner.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="tel:+436766166646"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                  data-testid="hero-phone-button"
                >
                  <Phone className="h-5 w-5" />
                  Jetzt anrufen
                </a>
                <Button
                  variant="outline"
                  className="rounded-full border-primary/20 bg-white px-7 py-7 text-base font-semibold text-primary hover:bg-primary/5"
                  onClick={() => setPartnerModalOpen(true)}
                  data-testid="hero-partner-button"
                >
                  Partner werden
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <a
                  href="https://wa.me/436766166646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-white px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                  data-testid="hero-whatsapp-button"
                >
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp Anfrage
                </a>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <div className="border-b border-border px-8 py-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">Unser Anspruch</div>
                  <div className="mt-3 text-3xl font-semibold text-primary">Ruhe in einer dringenden Situation.</div>
                </div>
                <div className="grid gap-0 sm:grid-cols-2">
                  <div className="border-b border-border p-8 sm:border-b-0 sm:border-r">
                    <Clock3 className="mb-5 h-8 w-8 text-primary" />
                    <h2 className="text-xl font-semibold text-primary">24/7 erreichbar</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Aufnahme und Koordination dringender Anliegen – auch außerhalb klassischer Bürozeiten.
                    </p>
                  </div>
                  <div className="p-8">
                    <ShieldCheck className="mb-5 h-8 w-8 text-primary" />
                    <h2 className="text-xl font-semibold text-primary">Strukturierte Abwicklung</h2>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      Professionelle Kommunikation und koordinierte Weiterleitung an passende Fachbetriebe.
                    </p>
                  </div>
                </div>
                <div className="border-t border-border bg-slate-950 px-8 py-6 text-white">
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div>
                      <div className="text-2xl font-semibold">5</div>
                      <div className="mt-1 text-sm text-white/70">Leistungsbereiche</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold">9</div>
                      <div className="mt-1 text-sm text-white/70">Bundesländer</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold">1</div>
                      <div className="mt-1 text-sm text-white/70">Zentraler Kontakt</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">Über Notprofi24</div>
              <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">
                Ein professioneller Ansprechpartner für mehrere dringende Gewerke.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-foreground/75">
                Unser Fokus liegt auf einer seriösen und nachvollziehbaren Koordination von Einsätzen. Statt vieler
                einzelner Kontakte erhalten Hausverwaltungen, Unternehmen und Privatkunden eine zentrale Stelle für
                die strukturierte Weiterleitung ihres Anliegens.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {principles.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-muted/35 p-4">
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <p className="text-sm leading-6 text-foreground/75">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Leistungsbereiche</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Koordination in fünf Gewerken.</h2>
            </div>
            <Link href="/leistungen" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/80 transition-colors hover:text-white">
              Alle Leistungen ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-slate-950/90 p-7" data-testid={`service-card-${service.title.toLowerCase()}`}>
                  <div className="mb-8 inline-flex rounded-full border border-white/15 p-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/70">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-[linear-gradient(160deg,#0f172a_0%,#1e293b_100%)] p-8 text-white md:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Für Hausverwaltungen</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Übersichtlich, verlässlich und zentral gesteuert.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
                Besonders für Hausverwaltungen ist eine saubere Koordination entscheidend. Notprofi24 unterstützt bei
                der raschen Weiterleitung von Störungen und Schadensfällen an passende Fachbetriebe.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Ein Ansprechpartner statt mehrerer Kontakte",
                  "Klare Kommunikation bei dringenden Anliegen",
                  "Passend für laufende Objektbetreuung",
                  "Professioneller Außenauftritt gegenüber Eigentümern und Mietern",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">Ablauf</div>
              <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">So funktioniert die Koordination.</h2>
              <div className="mt-10 space-y-6">
                {[
                  {
                    step: "01",
                    title: "Anliegen aufnehmen",
                    text: "Telefonisch oder digital wird das Problem erfasst und eingeordnet.",
                  },
                  {
                    step: "02",
                    title: "Passendes Gewerk zuordnen",
                    text: "Das Anliegen wird dem geeigneten Fachbereich und einem passenden Betrieb zugeordnet.",
                  },
                  {
                    step: "03",
                    title: "Einsatz weiterleiten",
                    text: "Die Einsatzkoordination erfolgt strukturiert und mit klarem Kommunikationsweg.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5 rounded-2xl border border-border bg-white p-6 shadow-sm">
                    <div className="min-w-14 text-2xl font-semibold text-primary">{item.step}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/35 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">Abdeckung</div>
            <h2 className="mt-4 text-3xl font-semibold text-primary md:text-4xl">Österreichweit erreichbar.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-foreground/70">
              Notprofi24 ist in allen neun Bundesländern erreichbar und auf eine klare, seriöse Kommunikation ausgelegt.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {states.map((state) => (
              <div
                key={state}
                className="flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4"
                data-testid={`state-${state.toLowerCase().replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ü/g, 'ue')}`}
              >
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium text-primary">{state}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-slate-950 px-8 py-10 text-white md:px-12 md:py-14">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/60">Kontakt</div>
                <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Benötigen Sie rasche Unterstützung?</h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                  Wir nehmen Ihr Anliegen entgegen und koordinieren die weitere Bearbeitung mit dem passenden Gewerk.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="tel:+436766166646"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-semibold text-primary"
                >
                  <Phone className="h-5 w-5" />
                  0676 6166646
                </a>
                <Button
                  variant="outline"
                  className="rounded-full border-white/20 bg-transparent px-7 py-7 text-white hover:bg-white/10"
                  onClick={() => setEmergencyModalOpen(true)}
                >
                  Anfrage übermitteln
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmergencyModal open={emergencyModalOpen} onOpenChange={setEmergencyModalOpen} />
      <PartnerModal open={partnerModalOpen} onOpenChange={setPartnerModalOpen} />
    </div>
  );
}
