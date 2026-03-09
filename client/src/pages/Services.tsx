import { ArrowRight, CheckCircle2, Clock3, Eye, Home as HomeIcon, Key, Phone, ShieldCheck, Wrench, Zap } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "installateur",
      icon: Wrench,
      title: "Installateur-Notdienst",
      description:
        "Bei Rohrbruch, Verstopfung, Heizungsausfall oder Wasserschaden koordinieren wir rasch den passenden Sanitär-Fachbetrieb.",
      focus: ["Rohrbruch & Leckortung", "Abfluss- und WC-Verstopfungen", "Heizungs- und Warmwasserausfall"],
      cases: [
        "Sofortmaßnahmen zur Schadensbegrenzung",
        "Koordination des passenden Fachbetriebs",
        "Unterstützung bei Dokumentation für Versicherungen",
      ],
    },
    {
      id: "elektriker",
      icon: Zap,
      title: "Elektriker-Notdienst",
      description:
        "Bei Stromausfall, Kurzschluss oder Defekt an Sicherungen organisieren wir sichere und professionelle Hilfe durch qualifizierte Elektrofachkräfte.",
      focus: ["Stromausfall & Sicherungen", "Kurzschluss & elektrische Störungen", "Sicherheitsrelevante Defekte"],
      cases: [
        "Ersteinschätzung der Situation am Telefon",
        "Rasche Vermittlung eines Elektrofachbetriebs",
        "Koordination sicherheitsrelevanter Maßnahmen vor Ort",
      ],
    },
    {
      id: "schlosser",
      icon: Key,
      title: "Schlüsseldienst & Schlossservice",
      description:
        "Ob ausgesperrt, defektes Schloss oder Schaden nach einem Einbruch: Wir koordinieren verlässliche Hilfe für raschen Zugang und Absicherung.",
      focus: ["Türöffnungen", "Schlossreparaturen", "Sofortmaßnahmen nach Einbruch"],
      cases: [
        "Vermittlung eines passenden Schlüsseldienstes",
        "Koordination von Reparatur oder Tausch",
        "Organisation provisorischer Sicherheitsmaßnahmen",
      ],
    },
    {
      id: "dachdecker",
      icon: HomeIcon,
      title: "Dachdecker-Notdienst",
      description:
        "Bei Sturmschäden, Wassereintritt oder beschädigten Dachteilen sorgen wir für eine schnelle Koordination von Notabdichtung und Sicherung.",
      focus: ["Sturmschäden am Dach", "Undichte Stellen", "Beschädigte Dachrinnen oder Ziegel"],
      cases: [
        "Rasche Einschätzung der Dringlichkeit",
        "Koordination von Notabdichtung und Sicherung",
        "Weiterleitung an den passenden Dach-Fachbetrieb",
      ],
    },
    {
      id: "glaser",
      icon: Eye,
      title: "Glaser-Notdienst",
      description:
        "Bei Glasbruch, beschädigten Fenstern oder Einbruchschäden organisieren wir rasch eine sichere Zwischenlösung und die weitere Behebung.",
      focus: ["Fenster- und Türverglasung", "Notverglasung", "Sicherung nach Glasbruch"],
      cases: [
        "Absicherung gefährdeter Bereiche",
        "Vermittlung einer geeigneten Glaserei",
        "Koordination von Notverglasung und Austausch",
      ],
    },
  ];

  const process = [
    {
      icon: Phone,
      title: "Notfall melden",
      text: "Sie schildern uns den Vorfall telefonisch oder online. Wir erfassen die Lage rasch und strukturiert.",
    },
    {
      icon: ShieldCheck,
      title: "Passenden Fachbetrieb koordinieren",
      text: "Wir leiten den Auftrag an einen geeigneten Partnerbetrieb weiter und koordinieren die nächsten Schritte.",
    },
    {
      icon: Clock3,
      title: "Schnelle Einsatzabwicklung",
      text: "Unser Fokus liegt auf einer verlässlichen, professionellen und zügigen Organisation des Einsatzes.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-4 py-1 text-sm font-semibold text-slate-700">
              Professionelle Notfallkoordination in ganz Österreich
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-primary md:text-5xl">
              Unsere Leistungen
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Notprofi24 vermittelt und koordiniert qualifizierte Fachbetriebe für dringende Einsätze. Der Fokus liegt auf klaren Abläufen,
              professioneller Kommunikation und einer verlässlichen Organisation im Notfall.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-10 md:py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Direkt zum passenden Leistungsbereich</h2>
              <p className="mt-1 text-sm text-slate-600">Alle Bereiche sind übersichtlich gegliedert und auf der Seite direkt ansteuerbar.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:text-primary"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="space-y-8">
          {services.map((service) => {
            const IconComponent = service.icon;

            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-32 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
                data-testid={`service-detail-${service.id}`}
              >
                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                  <div>
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{service.title}</h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{service.description}</p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {service.focus.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <h3 className="text-lg font-semibold text-slate-900">Was wir in diesem Bereich organisieren</h3>
                    <ul className="mt-5 space-y-4">
                      {service.cases.map((caseItem) => (
                        <li key={caseItem} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span>{caseItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-16 md:pb-20">
        <div className="overflow-hidden rounded-3xl bg-primary text-white shadow-xl">
          <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Schnelle Hilfe professionell organisiert</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-100">
                Melden Sie Ihren Notfall direkt telefonisch oder online. Wir kümmern uns um die strukturierte Weiterleitung und die passende Koordination.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <a
                href="tel:+436766166646"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-emergency px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-orange-600"
                data-testid="services-phone-button"
              >
                <Phone className="h-5 w-5" />
                0676 6166646
              </a>
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-white/70 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white hover:text-primary"
                data-testid="services-contact-button"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
