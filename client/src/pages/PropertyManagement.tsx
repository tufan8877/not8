import { Button } from "@/components/ui/button";
import { Check, Clock, FileText, Users, Phone, Shield, MapPin, ChevronRight } from "lucide-react";

export default function PropertyManagement() {
  const benefits = [
    {
      icon: Clock,
      title: "24/7 Erreichbarkeit",
      description: "Rückruf binnen 5 Minuten, Disposition unter 15 Minuten",
      details: [
        "Permanente Erreichbarkeit an 365 Tagen",
        "Garantierte Reaktionszeiten",
        "Sofortige Einsatzkoordination",
        "Keine Wartezeiten bei Notfällen"
      ]
    },
    {
      icon: Users,
      title: "Ein Ansprechpartner",
      description: "Für alle fünf Gewerke – keine mehrfachen Kontakte nötig",
      details: [
        "Zentrale Koordination aller Gewerke",
        "Einheitliche Kommunikation",
        "Reduzierter Verwaltungsaufwand",
        "Klare Zuständigkeiten"
      ]
    },
    {
      icon: FileText,
      title: "Dokumentierte Einsätze",
      description: "Vollständige Dokumentation für Ihre Unterlagen",
      details: [
        "Detaillierte Einsatzberichte",
        "Foto-Dokumentation der Schäden",
        "Digitale Aufbereitung aller Unterlagen",
        "Archivierung für Versicherung"
      ]
    },
    {
      icon: Shield,
      title: "Keine Zusatzkosten",
      description: "Für Sie als Hausverwaltung entstehen keine zusätzlichen Kosten",
      details: [
        "Kostenlose Koordinationsleistung",
        "Transparente Abrechnungsmodelle",
        "Direkte Abrechnung mit Fachbetrieben",
        "Keine versteckten Gebühren"
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Anliegen melden",
      description: "Sie rufen an oder nutzen unser Online-Formular",
      details: "Beschreiben Sie kurz das Problem – wir erfassen alle wichtigen Details und priorisieren nach Dringlichkeit."
    },
    {
      number: "2", 
      title: "Wir koordinieren",
      description: "Sofortige Disposition und Beauftragung des Fachbetriebs",
      details: "Binnen Minuten kontaktieren wir den passenden Fachbetrieb in Ihrer Region und koordinieren den Einsatz."
    },
    {
      number: "3",
      title: "Fachbetrieb fährt los",
      description: "Qualifizierte Lösung direkt vor Ort",
      details: "Der Fachbetrieb führt die Reparatur durch und dokumentiert alles für Ihre Unterlagen."
    }
  ];

  const slaTable = [
    { service: "Rückruf", target: "< 5 Minuten", description: "Bestätigung des Notfalls" },
    { service: "Disposition", target: "< 15 Minuten", description: "Fachbetrieb ist beauftragt" },
    { service: "Anfahrt Installateur", target: "< 60 Minuten", description: "Bei wasserbedingten Notfällen" },
    { service: "Anfahrt Elektriker", target: "< 45 Minuten", description: "Bei Stromausfall" },
    { service: "Anfahrt Schlosser", target: "< 30 Minuten", description: "Bei Aussperrung" },
    { service: "Dokumentation", target: "< 24 Stunden", description: "Vollständiger Einsatzbericht" }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Für Hausverwaltungen</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professionelle Einsatzsteuerung für Immobilienverwalter. Ein Ansprechpartner für alle Notfälle – 
            von der Koordination bis zur Dokumentation.
          </p>
        </div>

        {/* Main Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office building representing professional property management" 
              className="rounded-2xl shadow-xl w-full h-auto" 
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Warum Hausverwaltungen uns vertrauen</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground mb-3">{benefit.description}</p>
                      <ul className="text-sm space-y-1">
                        {benefit.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center gap-2 text-muted-foreground">
                            <Check className="w-3 h-3 text-green-600" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Unser bewährter Service-Ablauf</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-2xl">{step.number}</span>
                </div>
                <h3 className="font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground font-medium mb-4">{step.description}</p>
                <p className="text-sm text-muted-foreground">{step.details}</p>
                {index < processSteps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-primary" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SLA Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Unsere Service Level Agreements (SLA)</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Service</th>
                    <th className="px-6 py-4 text-left font-semibold">Zielzeit</th>
                    <th className="px-6 py-4 text-left font-semibold">Beschreibung</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {slaTable.map((item, index) => (
                    <tr key={index} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-medium">{item.service}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {item.target}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Coverage and Costs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-primary text-white rounded-2xl p-8">
            <MapPin className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Flächendeckende Abdeckung</h3>
            <p className="text-blue-100 mb-6">
              Österreichweit verfügbar in allen 9 Bundesländern mit einem Netzwerk von über 500 qualifizierten Partnerbetrieben.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Großraum Wien, Niederösterreich
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Oberösterreich, Salzburg, Tirol
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Steiermark, Kärnten, Vorarlberg, Burgenland
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <span className="text-green-600 font-bold text-xl">0€</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-green-800">Kostenmodell für Hausverwaltungen</h3>
            <p className="text-green-700 mb-6">
              <strong>Keine zusätzlichen Kosten</strong> für Hausverwaltungen und deren Kunden. 
              Unser Geschäftsmodell basiert auf einer fairen Kooperation mit unseren Partnerbetrieben.
            </p>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Kostenlose 24/7-Hotline
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Kostenlose Einsatzkoordination
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Kostenlose Dokumentation
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Werden Sie unser Partner</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vereinfachen Sie Ihre Notfall-Koordination und profitieren Sie von unserem 
            professionellen Partnernetzwerk. Kontaktieren Sie uns für ein unverbindliches Gespräch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+436766166646" 
              className="bg-emergency hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors"
              data-testid="property-management-phone-button"
            >
              <Phone className="w-5 h-5" />
              0676 6166646
            </a>
            <Button 
              asChild
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-bold text-lg"
              data-testid="property-management-contact-button"
            >
              <a href="/kontakt">Unverbindlich anfragen</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
