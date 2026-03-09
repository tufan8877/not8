import { useState } from "react";
import EmergencyModal from "@/components/EmergencyModal";
import PartnerModal from "@/components/PartnerModal";
import {
  Phone,
  Handshake,
  Clock,
  MapPin,
  Shield,
  Wrench,
  Zap,
  Key,
  Home as HomeIcon,
  Eye,
  Star,
  Check,
  MessageSquare,
  ArrowRight,
  Building2,
  FileCheck,
  Headphones,
} from "lucide-react";

export default function Home() {
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  const services = [
    {
      icon: Wrench,
      title: "Installateur",
      description:
        "Koordination schneller Hilfe bei Rohrbruch, Verstopfung, Heizungsstörung und Wasserschaden.",
      points: [
        "Rohrbruch und Wasseraustritt",
        "Verstopfte Leitungen und Abflüsse",
        "Heizungs- und Warmwasserstörungen",
      ],
      iconBg: "bg-blue-50",
      iconColor: "text-primary",
    },
    {
      icon: Zap,
      title: "Elektriker",
      description:
        "Unterstützung bei Stromausfall, Sicherungsproblemen, Kurzschluss und sicherheitsrelevanten Störungen.",
      points: [
        "Stromausfall und FI-Störungen",
        "Kurzschluss und Sicherungsprobleme",
        "Elektrische Notfälle in Gebäuden",
      ],
      iconBg: "bg-yellow-50",
      iconColor: "text-warning",
    },
    {
      icon: Key,
      title: "Schlosser",
      description:
        "Organisation von Türöffnungen, Schlossreparaturen und Sofortmaßnahmen nach Einbruchschäden.",
      points: [
        "Aussperrung und defekte Schlösser",
        "Schäden nach Einbruch",
        "Provisorische Sicherung und Austausch",
      ],
      iconBg: "bg-orange-50",
      iconColor: "text-emergency",
    },
    {
      icon: HomeIcon,
      title: "Dachdecker",
      description:
        "Schnelle Koordination bei Sturmschäden, Undichtheiten und akuten Schäden an Dach und Rinne.",
      points: [
        "Notabdichtung bei Unwetter",
        "Sicherung loser Dachteile",
        "Schäden an Dachrinne und Eindeckung",
      ],
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Eye,
      title: "Glaser",
      description:
        "Vermittlung von Soforthilfe bei Glasbruch, Einbruchschäden und provisorischen Sicherungen.",
      points: [
        "Notverglasung und Absicherung",
        "Fenster- und Schaufensterschäden",
        "Austausch beschädigter Glaselemente",
      ],
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
  ];

  const strengths = [
    {
      icon: Headphones,
      title: "Zentrale Koordination",
      description:
        "Ein Ansprechpartner für die Aufnahme, Einschätzung und Weiterleitung Ihres Anliegens.",
    },
    {
      icon: Shield,
      title: "Qualifizierte Fachbetriebe",
      description:
        "Zusammenarbeit mit geeigneten Partnerbetrieben für unterschiedliche Notfälle und Gewerke.",
    },
    {
      icon: FileCheck,
      title: "Klare Abläufe",
      description:
        "Strukturierte Kommunikation vom Erstkontakt bis zur Weiterleitung an den passenden Betrieb.",
    },
  ];

  const targetGroups = [
    {
      icon: Building2,
      title: "Für Hausverwaltungen",
      description:
        "Verlässliche Unterstützung bei Notfällen in Wohn- und Gewerbeobjekten – mit zentraler Erreichbarkeit und nachvollziehbaren Abläufen.",
    },
    {
      icon: Wrench,
      title: "Für Privatkunden",
      description:
        "Wenn rasch Unterstützung gebraucht wird, helfen wir bei der Koordination des passenden Fachbetriebs.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Kontaktaufnahme",
      description:
        "Sie schildern telefonisch oder online Ihr Anliegen und die Dringlichkeit des Einsatzes.",
    },
    {
      step: "02",
      title: "Einschätzung & Weiterleitung",
      description:
        "Wir prüfen den Fall und koordinieren den passenden Fachbereich beziehungsweise Partnerbetrieb.",
    },
    {
      step: "03",
      title: "Organisation des Einsatzes",
      description:
        "Der zuständige Fachbetrieb übernimmt die weitere Abwicklung des Einsatzes vor Ort.",
    },
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

  const testimonials = [
    {
      rating: 5,
      text: "Die Kommunikation war klar und professionell. Unser Anliegen wurde rasch an den passenden Betrieb weitergeleitet.",
      author: "Maria Huber",
      role: "Hausverwaltung Wien",
    },
    {
      rating: 5,
      text: "Gerade im Notfall ist es hilfreich, einen zentralen Ansprechpartner zu haben. Der Ablauf war strukturiert und verlässlich.",
      author: "Thomas Maier",
      role: "Privatkunde Salzburg",
    },
    {
      rating: 5,
      text: "Professioneller Auftritt, gute Erreichbarkeit und eine saubere Koordination. Genau so wünscht man sich das im Ernstfall.",
      author: "Andreas Schmid",
      role: "Immobilienverwaltung Linz",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
            serviceType: "Emergency Services Coordination",
            availableService: [
              { "@type": "Service", name: "Installateur Notdienst" },
              { "@type": "Service", name: "Elektriker Notdienst" },
              { "@type": "Service", name: "Schlosser Notdienst" },
              { "@type": "Service", name: "Dachdecker Notdienst" },
              { "@type": "Service", name: "Glaser Notdienst" },
            ],
          }),
        }}
      />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.2),transparent_40%)]" />
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
                Österreichweite Koordination von Notfall-Einsätzen
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Seriöse Unterstützung, wenn rasch der passende Fachbetrieb gebraucht wird.
              </h1>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Notprofi24 koordiniert Notfälle in den Bereichen Sanitär, Elektro, Schloss, Dach und Glas.
                Für Hausverwaltungen und Privatkunden steht ein zentraler Ansprechpartner für die strukturierte
                Weiterleitung Ihres Anliegens bereit.
              </p>

              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="tel:+436766166646"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-7 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100"
                  data-testid="hero-phone-button"
                >
                  <Phone className="h-5 w-5" />
                  0676 6166646 anrufen
                </a>
                <a
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                  data-testid="hero-contact-button"
                >
                  <ArrowRight className="h-5 w-5" />
                  Anfrage senden
                </a>
                <a
                  href="https://wa.me/436766166646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10"
                  data-testid="hero-whatsapp-button"
                >
                  <MessageSquare className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { label: "Erreichbarkeit", value: "24/7" },
                  { label: "Abdeckung", value: "9 Bundesländer" },
                  { label: "Gewerke", value: "5 Fachbereiche" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-2 text-sm text-slate-300">{item.label}</p>
                    <p className="text-xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
              <h2 className="mb-6 text-2xl font-semibold">Auf einen Blick</h2>
              <div className="space-y-5">
                {[
                  {
                    icon: Clock,
                    title: "Rasche Erstaufnahme",
                    text: "Klare Aufnahme Ihres Anliegens und strukturierte Einschätzung der Situation.",
                  },
                  {
                    icon: Shield,
                    title: "Professioneller Auftritt",
                    text: "Seriöse Kommunikation und geordnete Weiterleitung an den passenden Fachbereich.",
                  },
                  {
                    icon: MapPin,
                    title: "Österreichweite Ausrichtung",
                    text: "Einsatzkoordination für Hausverwaltungen und Privatkunden in ganz Österreich.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/10 p-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">{item.title}</h3>
                        <p className="text-sm leading-6 text-slate-300">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
                Ein zentraler Kontakt reduziert Abstimmungsaufwand und schafft Übersicht – besonders bei mehreren
                Objekten oder dringenden Schadensfällen.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">Notprofi24</p>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">
              Ein klarer Ablauf statt hektischer Suche im Notfall
            </h2>
            <p className="text-lg leading-8 text-muted-foreground">
              Im Ernstfall zählt Übersicht. Deshalb setzt Notprofi24 auf einen professionellen, ruhigen und gut
              nachvollziehbaren Ablauf – von der ersten Kontaktaufnahme bis zur Koordination des zuständigen
              Fachbetriebs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">Leistungsbereiche</p>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Koordination in fünf zentralen Gewerken</h2>
            </div>
            <a href="/leistungen" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80">
              Alle Leistungen ansehen
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-3xl border border-border bg-white p-8 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                  data-testid={`service-card-${service.title.toLowerCase()}`}
                >
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${service.iconBg}`}>
                    <IconComponent className={`h-7 w-7 ${service.iconColor}`} />
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mb-6 leading-7 text-muted-foreground">{service.description}</p>
                  <div className="space-y-3 border-t border-border pt-5">
                    {service.points.map((point, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 text-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">Warum Notprofi24</p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Professionell, geordnet und nachvollziehbar</h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
              Der Fokus liegt auf klarer Kommunikation, zentraler Erreichbarkeit und einer strukturierten Koordination
              von Notfallanliegen.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-border bg-slate-50 p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="leading-7 text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Ablauf</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">So funktioniert die Koordination</h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-300">
              Der Prozess ist auf Übersicht, rasche Weiterleitung und eine saubere Kommunikation ausgerichtet.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {process.map((item) => (
              <div key={item.step} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-slate-400">{item.step}</p>
                <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {targetGroups.map((group) => {
              const Icon = group.icon;
              return (
                <div key={group.title} className="rounded-3xl border border-border bg-slate-50 p-8 md:p-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mb-4 text-2xl font-semibold text-slate-900">{group.title}</h2>
                  <p className="leading-7 text-muted-foreground">{group.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">Stimmen zur Zusammenarbeit</p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">Vertrauen durch klare Abläufe</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="rounded-3xl border border-border bg-white p-7 shadow-sm"
                data-testid={`testimonial-${index}`}
              >
                <div className="mb-5 flex text-warning">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mb-6 leading-7 text-slate-700">“{testimonial.text}”</p>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="rounded-[2rem] bg-primary px-6 py-12 text-white md:px-10 md:py-14">
            <div className="mb-10 flex flex-col gap-4 text-center">
              <h2 className="text-3xl font-bold md:text-4xl">Österreichweit erreichbar</h2>
              <p className="mx-auto max-w-2xl text-lg text-blue-100">
                Notprofi24 ist auf eine österreichweite Einsatzkoordination in allen neun Bundesländern ausgerichtet.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {states.map((state) => (
                <div
                  key={state}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center"
                  data-testid={`state-${state
                    .toLowerCase()
                    .replace(/ö/g, "oe")
                    .replace(/ä/g, "ae")
                    .replace(/ü/g, "ue")}`}
                >
                  <MapPin className="mx-auto mb-2 h-5 w-5" />
                  <p className="font-medium">{state}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-5 text-3xl font-bold md:text-4xl">Sie benötigen Unterstützung bei einem Notfall?</h2>
            <p className="mb-8 text-lg leading-8 text-slate-300">
              Kontaktieren Sie Notprofi24 telefonisch oder über das Kontaktformular. Wir erfassen Ihr Anliegen und
              koordinieren die weitere Weiterleitung.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+436766166646"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-slate-950 transition hover:bg-slate-100"
                data-testid="final-phone-button"
              >
                <Phone className="h-5 w-5" />
                0676 6166646
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                data-testid="final-contact-button"
              >
                <ArrowRight className="h-5 w-5" />
                Zur Kontaktseite
              </a>
              <button
                type="button"
                onClick={() => setPartnerModalOpen(true)}
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                data-testid="final-partner-button"
              >
                <Handshake className="h-5 w-5" />
                Partner werden
              </button>
            </div>
          </div>
        </div>
      </section>

      <EmergencyModal open={emergencyModalOpen} onOpenChange={setEmergencyModalOpen} />
      <PartnerModal open={partnerModalOpen} onOpenChange={setPartnerModalOpen} />
    </div>
  );
}
