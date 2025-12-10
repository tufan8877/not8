import { Check, Users, Handshake, Phone, Calculator, Euro, FileText } from "lucide-react";

export default function Pricing() {
  const customerBenefits = [
    "Kostenlose 24/7-Hotline",
    "Kostenlose Einsatzkoordination", 
    "Kostenlose Dokumentation",
    "Keine Vermittlungsgebühren",
    "Keine versteckten Kosten",
    "Direkte Abrechnung mit Fachbetrieb"
  ];

  const partnerBenefits = [
    "Planbare Kosten pro Auftrag",
    "Mehr Aufträge ohne Werbekosten",
    "Keine monatlichen Grundgebühren",
    "Bezahlung nur bei Auftragsvergabe",
    "Professionelle Vorqualifikation", 
    "Faire und transparente Konditionen"
  ];

  const costExamples = [
    {
      scenario: "Rohrbruch Reparatur",
      customerCost: "Nur Handwerkerkosten",
      partnerFee: "30€",
      description: "Kunde zahlt nur die Reparaturkosten direkt an den Installateur"
    },
    {
      scenario: "Stromausfall beheben", 
      customerCost: "Nur Handwerkerkosten",
      partnerFee: "30€",
      description: "Kunde zahlt nur die Arbeitszeit direkt an den Elektriker"
    },
    {
      scenario: "Türöffnung nach Aussperrung",
      customerCost: "Nur Handwerkerkosten", 
      partnerFee: "30€",
      description: "Kunde zahlt nur die Öffnungsgebühr direkt an den Schlosser"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Transparente Preise</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Faire Konditionen für alle Beteiligten. Keine versteckten Kosten, 
            keine Überraschungen – nur transparente und kalkulierbare Preisgestaltung.
          </p>
        </div>

        {/* Main Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Customer Pricing */}
          <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-green-800">Für Auftraggeber</h2>
              <div className="text-6xl font-bold text-green-600 mb-4">0 €</div>
              <p className="text-green-700 text-lg font-medium">
                Für Hausverwaltungen und Privatkunden fallen <strong>keine zusätzlichen Kosten</strong> an.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <h3 className="font-bold text-lg text-green-800">Inkludierte Leistungen:</h3>
              {customerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-green-700">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-green-100 rounded-xl p-4">
              <h4 className="font-semibold text-green-800 mb-2">Wichtiger Hinweis:</h4>
              <p className="text-sm text-green-700">
                Sie zahlen ausschließlich die Arbeitskosten direkt an den ausführenden Fachbetrieb. 
                Unser Koordinationsservice ist für Sie vollständig kostenfrei.
              </p>
            </div>
          </div>

          {/* Partner Pricing */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Für Partnerbetriebe</h2>
              <div className="text-6xl font-bold text-blue-600 mb-4">30 €</div>
              <p className="text-blue-700 text-lg font-medium">
                Fixbetrag pro erfolgreich übertragenen Auftrag.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <h3 className="font-bold text-lg text-blue-800">Ihre Vorteile:</h3>
              {partnerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-blue-700">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-100 rounded-xl p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Abrechnungsmodell:</h4>
              <p className="text-sm text-blue-700">
                Abrechnung erfolgt monatlich per Rechnung. Keine Vorauskasse, 
                keine Grundgebühren – Sie zahlen nur für tatsächlich vermittelte Aufträge.
              </p>
            </div>
          </div>
        </div>

        {/* Cost Examples */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Kostenbeispiele</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {costExamples.map((example, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-border"
                data-testid={`cost-example-${index}`}
              >
                <div className="text-center mb-4">
                  <Calculator className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-lg">{example.scenario}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-sm font-medium">Kunde zahlt:</span>
                    <span className="font-bold text-green-600">{example.customerCost}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm font-medium">Partner zahlt:</span>
                    <span className="font-bold text-blue-600">{example.partnerFee}</span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground">{example.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Model Explanation */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Unser Geschäftsmodell</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">Wie funktioniert die Finanzierung?</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Unser Service für Kunden ist vollständig kostenfrei, da wir uns über 
                    eine faire Kooperation mit unseren Partnerbetrieben finanzieren.
                  </p>
                  <p>
                    Partnerbetriebe zahlen pro erfolgreich vermittelten Auftrag eine 
                    Pauschale von 30€ – deutlich weniger als traditionelle Werbekosten 
                    und nur bei tatsächlichem Erfolg.
                  </p>
                  <p>
                    Dieses Modell ermöglicht es uns, sowohl für Kunden als auch Partner 
                    einen echten Mehrwert zu schaffen.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <Euro className="w-5 h-5 text-primary" />
                  Kostenvergleich für Partner
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Traditionelle Werbung/Monat:</span>
                    <span className="font-bold text-red-600">200-500€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Online-Marketing/Monat:</span>
                    <span className="font-bold text-red-600">300-800€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Notprofi24 (10 Aufträge):</span>
                    <span className="font-bold text-green-600">300€</span>
                  </div>
                  <hr className="border-border" />
                  <div className="flex justify-between font-bold">
                    <span>Ersparnis bei 10 Aufträgen:</span>
                    <span className="text-green-600">200-500€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Häufige Fragen zu Preisen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-bold mb-3 text-primary">Fallen für mich als Kunde versteckte Kosten an?</h3>
              <p className="text-muted-foreground text-sm">
                Nein, absolut nicht. Sie zahlen ausschließlich die Arbeitskosten direkt an den 
                Handwerker. Unser Koordinationsservice ist für Kunden vollständig kostenfrei.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-bold mb-3 text-primary">Wie wird die Partnergebühr abgerechnet?</h3>
              <p className="text-muted-foreground text-sm">
                Die 30€ pro Auftrag werden monatlich per Rechnung abgerechnet. 
                Es gibt keine Vorauskasse oder monatliche Grundgebühren.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-bold mb-3 text-primary">Was passiert bei Stornierungen?</h3>
              <p className="text-muted-foreground text-sm">
                Bei Stornierungen durch den Kunden vor Anfahrt des Partners entfällt 
                die Gebühr. Nur bei tatsächlich durchgeführten Einsätzen wird abgerechnet.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
              <h3 className="font-bold mb-3 text-primary">Gibt es Mengenrabatte für Partner?</h3>
              <p className="text-muted-foreground text-sm">
                Ab 50 Aufträgen pro Monat bieten wir gestaffelte Konditionen. 
                Sprechen Sie uns für individuelle Vereinbarungen an.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Fragen zu unseren Preisen?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für eine persönliche Beratung zu unserem Preismodell 
            und erfahren Sie, wie Sie profitieren können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+436766166646" 
              className="bg-emergency hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors"
              data-testid="pricing-phone-button"
            >
              <Phone className="w-5 h-5" />
              0676 6166646
            </a>
            <a 
              href="/kontakt"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              data-testid="pricing-contact-button"
            >
              Kostenlos anfragen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
