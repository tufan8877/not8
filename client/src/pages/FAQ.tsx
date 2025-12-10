import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Shield, 
  Euro, 
  MapPin, 
  CreditCard, 
  FileText,
  Phone,
  HelpCircle
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
  icon: React.ComponentType<any>;
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    {
      question: "Wie schnell reagieren Sie auf Notfälle?",
      answer: "Wir garantieren einen Rückruf binnen 5 Minuten nach Ihrer Meldung. Die Disposition des Fachbetriebs erfolgt innerhalb von 15 Minuten. Je nach Entfernung und Art des Notfalls ist der Fachbetrieb dann innerhalb von 30-90 Minuten vor Ort.",
      category: "Reaktionszeiten",
      icon: Clock
    },
    {
      question: "Wer ist für die Gewährleistung zuständig?",
      answer: "Die Gewährleistung und Haftung für die ausgeführten Arbeiten liegt ausschließlich beim beauftragten Fachbetrieb. notprofi24.at koordiniert lediglich die Beauftragung und ist nicht Vertragspartner der eigentlichen Dienstleistung. Der Werkvertrag kommt direkt zwischen Ihnen und dem Fachbetrieb zustande.",
      category: "Haftung & Gewährleistung",
      icon: Shield
    },
    {
      question: "Entstehen mir als Kunde zusätzliche Kosten?",
      answer: "Nein, für Hausverwaltungen und Privatkunden entstehen keine zusätzlichen Kosten durch unseren Koordinationsservice. Sie zahlen ausschließlich die Arbeitskosten direkt an den ausführenden Fachbetrieb. Unser Service ist für Auftraggeber vollständig kostenfrei.",
      category: "Kosten & Preise",
      icon: Euro
    },
    {
      question: "In welchen Regionen sind Sie tätig?",
      answer: "Wir sind österreichweit in allen 9 Bundesländern aktiv und haben ein flächendeckendes Partnernetzwerk. Egal ob Wien, Salzburg, Innsbruck oder Graz - wir finden den passenden Fachbetrieb in Ihrer Nähe.",
      category: "Einsatzgebiete",
      icon: MapPin
    },
    {
      question: "Wie läuft die Abrechnung ab?",
      answer: "Die Abrechnung erfolgt direkt zwischen Ihnen und dem ausführenden Fachbetrieb. Wir stellen keine separaten Rechnungen für die Koordination. Die Zahlungsmodalitäten vereinbaren Sie direkt mit dem Handwerker vor Ort.",
      category: "Abrechnung",
      icon: CreditCard
    },
    {
      question: "Wie gehen Sie mit meinen Daten um?",
      answer: "Wir behandeln alle Daten streng vertraulich und DSGVO-konform. Ihre persönlichen Daten werden nur zur Koordination des Notfall-Einsatzes verwendet und ausschließlich an den zuständigen Fachbetrieb weitergegeben. Details finden Sie in unserer Datenschutzerklärung.",
      category: "Datenschutz",
      icon: FileText
    },
    {
      question: "Was passiert, wenn der Fachbetrieb nicht erreichbar ist?",
      answer: "Sollte der zunächst beauftragte Fachbetrieb nicht verfügbar sein, kontaktieren wir umgehend den nächsten qualifizierten Partner in Ihrer Region. Wir haben mehrere Backup-Partner pro Gewerk und Gebiet, um eine schnelle Hilfe zu gewährleisten.",
      category: "Verfügbarkeit",
      icon: Phone
    },
    {
      question: "Können Sie auch größere Reparaturen koordinieren?",
      answer: "Ja, wir koordinieren sowohl Notfall-Reparaturen als auch größere Sanierungsarbeiten. Bei umfangreicheren Projekten erstellt der Fachbetrieb vor Ort einen Kostenvoranschlag, den Sie in Ruhe prüfen können. Erst nach Ihrer Zustimmung werden die Arbeiten durchgeführt.",
      category: "Leistungsumfang",
      icon: HelpCircle
    },
    {
      question: "Wie werden Ihre Partner ausgewählt?",
      answer: "Alle unsere Partner durchlaufen einen strengen Qualifikationsprozess. Wir prüfen Gewerbeberechtigung, Versicherungsschutz, Referenzen und Berufserfahrung. Nur geprüfte und zuverlässige Fachbetriebe werden in unser Netzwerk aufgenommen.",
      category: "Partnerauswahl",
      icon: Shield
    },
    {
      question: "Was ist bei einem Wasserschaden zu tun?",
      answer: "Bei Wasserschäden: 1) Hauptwasserhahn schließen, 2) Strom in betroffenen Bereichen abschalten, 3) Uns sofort anrufen unter 0676 6166646. Wir koordinieren umgehend einen Installateur und ggf. eine Trocknungsfirma. Dokumentieren Sie Schäden mit Fotos für die Versicherung.",
      category: "Notfall-Tipps",
      icon: Clock
    },
    {
      question: "Arbeiten Sie auch mit Versicherungen zusammen?",
      answer: "Wir unterstützen Sie gerne bei der Schadensabwicklung mit Ihrer Versicherung, indem wir detaillierte Einsatzberichte und Foto-Dokumentationen erstellen. Die Kostenabwicklung läuft jedoch direkt zwischen Ihnen, dem Fachbetrieb und Ihrer Versicherung.",
      category: "Versicherung",
      icon: FileText
    },
    {
      question: "Können Sie auch am Wochenende und an Feiertagen helfen?",
      answer: "Ja, unser Notdienst ist 24 Stunden am Tag, 7 Tage die Woche verfügbar - auch an Sonn- und Feiertagen. Notfälle kennen keine Geschäftszeiten, deshalb sind wir immer für Sie da.",
      category: "Verfügbarkeit",
      icon: Clock
    }
  ];

  const categories = Array.from(new Set(faqData.map(item => item.category)));

  const getCategoryIcon = (category: string) => {
    const item = faqData.find(faq => faq.category === category);
    return item ? item.icon : HelpCircle;
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Häufige Fragen</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen rund um unseren Service, 
            Kosten, Abläufe und Ihre Rechte als Kunde.
          </p>
        </div>

        {/* Category Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category, index) => {
            const IconComponent = getCategoryIcon(category);
            return (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-sm border border-border hover:shadow-md transition-shadow"
                data-testid={`category-${index}`}
              >
                <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-xs font-medium">{category}</div>
              </div>
            );
          })}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item, index) => {
              const IconComponent = item.icon;
              const isOpen = openItems.includes(index);
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-border overflow-hidden"
                  data-testid={`faq-item-${index}`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left hover:bg-muted/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                    data-testid={`faq-button-${index}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-primary text-left">
                            {item.question}
                          </h3>
                          <div className="text-xs text-muted-foreground mt-1">
                            {item.category}
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <div className="ml-12 pt-2 border-t border-border">
                        <p className="text-muted-foreground leading-relaxed mt-4">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Emergency Tips Section */}
        <div className="mt-20 bg-gradient-to-r from-emergency/10 to-warning/10 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Wichtige Notfall-Tipps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Bei Wasserschäden</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Hauptwasserhahn sofort schließen</li>
                <li>• Strom in betroffenen Räumen abschalten</li>
                <li>• Schäden fotografisch dokumentieren</li>
                <li>• Umgehend 0676 6166646 anrufen</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Bei Stromausfällen</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Sicherungen/FI-Schalter prüfen</li>
                <li>• Nicht selbst an Elektrik arbeiten</li>
                <li>• Bei Brandgeruch sofort Feuerwehr rufen</li>
                <li>• Elektriker über 0676 6166646 anfordern</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <HelpCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-3">Bei Aussperrung</h3>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Ruhe bewahren und prüfen, ob alle Zugänge verschlossen sind</li>
                <li>• Ausweis bereithalten für Identifikation</li>
                <li>• Nur seriöse Schlüsseldienste beauftragen</li>
                <li>• Über uns: schnell und transparent</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Weitere Fragen?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ihre Frage war nicht dabei? Rufen Sie uns an oder schreiben Sie uns – 
            wir helfen Ihnen gerne weiter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+436766166646" 
              className="bg-emergency hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors"
              data-testid="faq-phone-button"
            >
              <Phone className="w-5 h-5" />
              0676 6166646
            </a>
            <a 
              href="/kontakt"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              data-testid="faq-contact-button"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
