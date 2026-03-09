import { 
  Handshake, 
  TrendingUp, 
  ShieldCheck, 
  Clock, 
  CheckCircle, 
  Phone,
  Star,
  Award
} from "lucide-react";

export default function PartnerServices() {

  const benefits = [
    {
      icon: TrendingUp,
      title: "Mehr Aufträge",
      description: "Steigern Sie Ihr Auftragsvolumen ohne eigene Werbekosten",
      details: [
        "Konstanter Zufluss von Notfall-Aufträgen",
        "Qualifizierte Leads durch professionelle Vorqualifikation",
        "Fokus auf Ihre Kernkompetenzen statt Marketing",
        "Planbare Auslastung auch außerhalb der Geschäftszeiten"
      ],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: ShieldCheck,
      title: "Geprüfte Zusammenarbeit",
      description: "Professionelle Prozesse und ein verlässlicher Rahmen für die Zusammenarbeit",
      details: [
        "Klare Ansprechpartner und strukturierte Abläufe",
        "Transparente Kommunikation im Einsatzfall",
        "Sorgfältige Partnerprüfung und Qualitätsanspruch",
        "Verlässliche Zusammenarbeit auf Augenhöhe"
      ],
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Clock,
      title: "Klare Abläufe",
      description: "Professionelle Einsatzsteuerung und schnelle Abwicklung",
      details: [
        "Strukturierte Auftragsübertragung mit allen Details",
        "Direkte Kommunikation ohne Umwege",
        "Schnelle Freigabe und Terminkoordination",
        "Unterstützung bei der Kundenkommunikation"
      ],
      bgColor: "bg-orange-50", 
      iconColor: "text-orange-600"
    }
  ];

  const requirements = [
    {
      category: "Fachliche Qualifikation",
      items: [
        "Gültige Gewerbeberechtigung für entsprechendes Gewerk",
        "Nachgewiesene Berufserfahrung im Notdienst-Bereich",
        "Fachgerechte Ausstattung und Werkzeuge",
        "Kontinuierliche Weiterbildung und Qualifikation"
      ]
    },
    {
      category: "Versicherung & Haftung",
      items: [
        "Gültige Betriebshaftpflichtversicherung",
        "Ausreichender Versicherungsschutz für Notfall-Einsätze",
        "Nachweis über ordnungsgemäße Gewährleistungsabwicklung",
        "Saubere Geschäftsführung ohne offene Verbindlichkeiten"
      ]
    },
    {
      category: "Verfügbarkeit & Service",
      items: [
        "Bereitschaft für Notdienst-Einsätze",
        "Anfahrtszeiten unter 60 Minuten im Einsatzgebiet",
        "Zuverlässige Erreichbarkeit während Bereitschaftszeiten",
        "Professioneller Kundenumgang und Kommunikation"
      ]
    }
  ];

  const partnerTypes = [
    {
      title: "Installateur-Betriebe",
      description: "Sanitär, Heizung, Klima",
      specializations: [
        "Rohrleitungs-Notdienst",
        "Heizungsreparaturen", 
        "Wasserschaden-Soforthilfe",
        "Abfluss- und Kanaldienst"
      ],
      demand: "Sehr hoch",
      demandColor: "text-red-600"
    },
    {
      title: "Elektro-Betriebe", 
      description: "Elektroinstallation und Reparatur",
      specializations: [
        "Stromausfall-Behebung",
        "Elektro-Notdienst",
        "Sicherungsreparaturen",
        "Notbeleuchtung"
      ],
      demand: "Hoch",
      demandColor: "text-orange-600"
    },
    {
      title: "Schlosser-Betriebe",
      description: "Türöffnung und Sicherheitstechnik", 
      specializations: [
        "Aussperr-Notdienst",
        "Schlossreparaturen",
        "Einbruchschutz",
        "Sicherheitstechnik"
      ],
      demand: "Sehr hoch",
      demandColor: "text-red-600"
    },
    {
      title: "Dachdeckerei",
      description: "Dachreparatur und Notabdichtung",
      specializations: [
        "Sturmschaden-Reparatur",
        "Notabdichtungen",
        "Dachrinnen-Notdienst", 
        "Ziegel-Austausch"
      ],
      demand: "Mittel",
      demandColor: "text-yellow-600"
    },
    {
      title: "Glaserei",
      description: "Glasreparatur und Notverglasungen",
      specializations: [
        "Notverglasungen",
        "Schaufenster-Reparatur",
        "Einbruchschaden-Beseitigung",
        "Sicherheitsglas"
      ],
      demand: "Mittel", 
      demandColor: "text-yellow-600"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Bewerbung einreichen",
      description: "Füllen Sie unser Partnerformular aus mit allen erforderlichen Unterlagen"
    },
    {
      step: "2",
      title: "Prüfung & Qualifikation",
      description: "Wir prüfen Ihre Qualifikationen und führen ein persönliches Gespräch"
    },
    {
      step: "3",
      title: "Vertragsabschluss",
      description: "Bei positiver Prüfung schließen wir eine Partnerschaftsvereinbarung ab"
    },
    {
      step: "4",
      title: "Integration & Start",
      description: "Einrichtung in unserem System und Start der Auftragsvermittlung"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Partner werden</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Werden Sie Teil unseres österreichweiten Partnernetzwerks und erweitern Sie Ihre 
            Reichweite durch professionell koordinierte Notfall-Einsätze, klare Abläufe und 
            verlässliche Zusammenarbeit.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Ihre Vorteile als Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div 
                  key={index}
                  className={`${benefit.bgColor} rounded-2xl p-8 border border-border`}
                  data-testid={`partner-benefit-${index}`}
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className={`w-8 h-8 ${benefit.iconColor}`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">{benefit.title}</h3>
                    <p className="text-muted-foreground font-medium">{benefit.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partner Types & Demand */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Gesuchte Fachbetriebe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
                data-testid={`partner-type-${index}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{type.title}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Nachfrage</div>
                    <div className={`font-bold ${type.demandColor}`}>{type.demand}</div>
                  </div>
                </div>
                <div className="space-y-1">
                  {type.specializations.map((spec, specIndex) => (
                    <div key={specIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <Star className="w-3 h-3 text-warning" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Voraussetzungen für Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-border"
                data-testid={`requirement-category-${index}`}
              >
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  {req.category}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">So werden Sie unser Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center" data-testid={`process-step-${index}`}>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mb-20 bg-muted/30 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Unser Partnernetzwerk auf einen Blick</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Aktive Partner</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Verfügbarkeit</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">9</div>
              <div className="text-muted-foreground">Bundesländer</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">365</div>
              <div className="text-muted-foreground">Tage Einsatzbereitschaft</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Das sagen unsere Partner</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center mb-4">
                <div className="flex text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Die Zusammenarbeit ist professionell organisiert und die Einsätze werden klar 
                kommuniziert. Für unseren Betrieb ist besonders die strukturierte Abwicklung ein großer Vorteil."
              </p>
              <div>
                <p className="font-semibold">Johann Müller</p>
                <p className="text-sm text-muted-foreground">Müller Installationen GmbH, Wien</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center mb-4">
                <div className="flex text-warning">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "Wir schätzen die verlässliche Kommunikation und die gute Erreichbarkeit. 
                Anfragen kommen strukturiert an und lassen sich im Tagesgeschäft effizient abwickeln."
              </p>
              <div>
                <p className="font-semibold">Stefan Hofer</p>
                <p className="text-sm text-muted-foreground">Elektro Hofer KG, Salzburg</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Starten Sie jetzt als Partner</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Bewerben Sie sich als Partnerbetrieb und werden Sie Teil eines österreichweiten 
            Netzwerks mit professioneller Koordination und hohem Qualitätsanspruch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:office@notprofi24.at?subject=Partner%20werden%20-%20Bewerbung"
              className="bg-warning hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors"
              data-testid="partner-application-button"
            >
              <Handshake className="w-5 h-5" />
              Jetzt bewerben
            </a>
            <a 
              href="tel:+436766166646" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors"
              data-testid="partner-phone-button"
            >
              <Phone className="w-5 h-5" />
              0676 6166646
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
