import { Wrench, Zap, Key, Home as HomeIcon, Eye } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Wrench,
      title: "Installateur",
      description: "Rohrbrüche, verstopfte Abflüsse, defekte Heizungen, Wasserschäden – wir organisieren schnelle Hilfe bei allen Sanitärnotfällen.",
      emergencyTypes: [
        "Rohrbruch mit Wasseraustritt",
        "Verstopfte Toiletten und Abflüsse",
        "Heizungsausfall bei kalten Temperaturen", 
        "Defekte Warmwasserboiler",
        "Undichte Wasserleitungen",
        "Gefrorene Rohre"
      ],
      typicalCases: [
        "Wasserschaden eindämmen und Ursache beheben",
        "Notfallreparaturen an Sanitäranlagen",
        "Schnelle Rohrreinigung bei Verstopfungen",
        "Heizungsnotdienst bei Totalausfall"
      ],
      coordination: [
        "Sofortige Schadensaufnahme via Telefon",
        "Direkter Kontakt zu Sanitärnotdienst",
        "Koordination von Trocknungsmaßnahmen",
        "Dokumentation für Versicherung"
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-primary"
    },
    {
      icon: Zap,
      title: "Elektriker",
      description: "Stromausfälle, defekte Sicherungen, Kurzschlüsse – unsere Elektrofachkräfte sorgen für sichere Lösungen.",
      emergencyTypes: [
        "Totalausfall der Stromversorgung",
        "Defekte Sicherungen und FI-Schalter",
        "Kurzschlüsse in der Installation",
        "Ausfall der Notbeleuchtung",
        "Elektrische Störungen in Aufzügen",
        "Blitzschäden an elektrischen Anlagen"
      ],
      typicalCases: [
        "Stromversorgung schnellstmöglich wiederherstellen",
        "Sicherheitsrelevante Elektroinstallationen prüfen",
        "Notbeleuchtung installieren oder reparieren",
        "Provisorische Stromversorgung einrichten"
      ],
      coordination: [
        "Sicherheitscheck vor Ort-Einsatz",
        "Direkter Kontakt zu Elektrofachbetrieb",
        "Organisation von Ersatzteilen",
        "Koordination mit Netzbetreiber falls nötig"
      ],
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200", 
      iconBg: "bg-yellow-100",
      iconColor: "text-warning"
    },
    {
      icon: Key,
      title: "Schlosser",
      description: "Türöffnungen, Schloss-Reparaturen, Sicherheitstechnik – wir besorgen Ihnen wieder Zugang zu Ihren Räumen.",
      emergencyTypes: [
        "Ausgesperrt ohne Schlüssel",
        "Defekte Türschlösser",
        "Einbruchschäden an Türen und Fenstern",
        "Klemmendes oder blockiertes Schloss",
        "Abgebrochene Schlüssel im Schloss",
        "Sicherheitsrelevante Schließanlagen"
      ],
      typicalCases: [
        "Schadenfreie Türöffnung bei Aussperrung",
        "Schlossreparatur oder -austausch",
        "Provisorische Sicherung nach Einbruch",
        "Installation neuer Sicherheitstechnik"
      ],
      coordination: [
        "Identitätsprüfung vor Türöffnung",
        "Direkter Kontakt zu Schlüsseldienst",
        "Organisation von Sicherheitslösungen",
        "Dokumentation von Schäden"
      ],
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-emergency"
    },
    {
      icon: HomeIcon,
      title: "Dachdecker",
      description: "Sturmschäden, undichte Dächer, abgedeckte Ziegel – schnelle Notabdichtung verhindert weitere Schäden.",
      emergencyTypes: [
        "Sturmschäden am Dach",
        "Undichte Stellen mit Wassereintritt",
        "Abgedeckte oder gelockerte Ziegel",
        "Beschädigte Dachrinnen",
        "Hagelschäden an der Dacheindeckung",
        "Schäden an Dachabdichtung"
      ],
      typicalCases: [
        "Sofortige Notabdichtung bei Unwetter",
        "Provisorische Reparatur von Sturmschäden",
        "Sicherung gelockerte Dachteile",
        "Reparatur oder Austausch von Dachrinnen"
      ],
      coordination: [
        "Sicherheitsprüfung der Arbeitsplätze",
        "Direkter Kontakt zu Dachdeckerbetrieb",
        "Organisation von Gerüst falls erforderlich",
        "Koordination mit Versicherung"
      ],
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100", 
      iconColor: "text-green-600"
    },
    {
      icon: Eye,
      title: "Glaser",
      description: "Einbruchschäden, zerbrochene Scheiben, Schaufenster – professionelle Glasreparatur für Sicherheit und Schutz.",
      emergencyTypes: [
        "Einbruchschäden an Fenstern",
        "Zerbrochene Schaufenster",
        "Hagelschäden an Glasflächen",
        "Vandalismus-Schäden",
        "Defekte Sicherheitsverglasung",
        "Glasbruch durch Unfälle"
      ],
      typicalCases: [
        "Sofortige Notverglasungen zum Schutz",
        "Austausch von Sicherheitsglas",
        "Reparatur von Schaufenstern",
        "Installation von Einbruchschutz"
      ],
      coordination: [
        "Sicherheitsbeurteilung der Glasschäden", 
        "Direkter Kontakt zu Glaserei",
        "Organisation von Sicherheitsglas",
        "Koordination mit Sicherheitsdienst"
      ],
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Unsere Leistungen</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Umfassende Notfall-Koordination für alle Gewerke. Wir organisieren qualifizierte Fachbetriebe 
            und sorgen für schnelle, professionelle Lösungen in ganz Österreich.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className={`${service.bgColor} ${service.borderColor} border-2 rounded-3xl p-8 md:p-12`}
                data-testid={`service-detail-${service.title.toLowerCase()}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Header */}
                  <div className="lg:col-span-3 text-center mb-8">
                    <div className={`w-20 h-20 ${service.iconBg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <IconComponent className={`w-10 h-10 ${service.iconColor}`} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{service.title}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{service.description}</p>
                  </div>

                  {/* Problem Examples */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-primary">Häufige Notfälle</h3>
                    <ul className="space-y-2">
                      {service.emergencyTypes.map((type, typeIndex) => (
                        <li key={typeIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary font-bold">•</span>
                          <span>{type}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Typical Cases */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-primary">Typische Einsätze</h3>
                    <ul className="space-y-2">
                      {service.typicalCases.map((case_item, caseIndex) => (
                        <li key={caseIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary font-bold">•</span>
                          <span>{case_item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What We Coordinate */}
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-primary">Was wir organisieren</h3>
                    <ul className="space-y-2">
                      {service.coordination.map((coord, coordIndex) => (
                        <li key={coordIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary font-bold">•</span>
                          <span>{coord}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-primary text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Benötigen Sie sofort Hilfe?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Rufen Sie uns an oder melden Sie Ihren Notfall online – wir organisieren umgehend den passenden Fachbetrieb.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+436766166646" 
              className="bg-emergency hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors"
              data-testid="services-phone-button"
            >
              <Wrench className="w-5 h-5" />
              0676 6166646
            </a>
            <a 
              href="/kontakt"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              data-testid="services-contact-button"
            >
              Notfall online melden
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
