import { useState } from "react";
import { Button } from "@/components/ui/button";
import EmergencyModal from "@/components/EmergencyModal";
import { 
  Phone, 
  Clock, 
  MapPin, 
  Mail, 
  AlertTriangle,
  MessageSquare,
  CheckCircle
} from "lucide-react";

export default function Contact() {
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      title: "Telefon (Notfall-Hotline)",
      primary: "0676 6166646",
      secondary: "24/7 erreichbar",
      description: "Rufen Sie uns direkt an für sofortige Hilfe bei Notfällen",
      bgColor: "bg-emergency",
      textColor: "text-white",
      urgent: true
    },
    {
      icon: MessageSquare, 
      title: "Notfall auf WhatsApp melden",
      primary: "WhatsApp Nachricht",
      secondary: "24/7 erreichbar",
      description: "Senden Sie uns eine WhatsApp-Nachricht – wir melden uns sofort",
      bgColor: "bg-[#25D366]",
      textColor: "text-white",
      urgent: true
    },
    {
      icon: Mail,
      title: "E-Mail Kontakt",
      primary: "office@notprofi24.at",
      secondary: "Für allgemeine Anfragen",
      description: "Schreiben Sie uns für nicht-dringende Anliegen",
      bgColor: "bg-primary",
      textColor: "text-white",
      urgent: false
    }
  ];

  const businessHours = [
    { day: "Erreichbarkeit", hours: "24/7", special: true },
  ];

  const serviceAreas = [
    "Wien & Umgebung",
    "Niederösterreich", 
    "Oberösterreich",
    "Steiermark",
    "Tirol & Salzburg",
    "Kärnten",
    "Vorarlberg", 
    "Burgenland"
  ];

  const emergencyTypes = [
    {
      title: "Wasserschäden",
      examples: ["Rohrbruch", "Überschwemmung", "Heizungsausfall"],
      priority: "Sehr hoch"
    },
    {
      title: "Stromausfälle",
      examples: ["Totalausfall", "Kurzschluss", "Sicherungsdefekt"],
      priority: "Hoch"
    },
    {
      title: "Aussperrungen",
      examples: ["Türöffnung", "Schlossdefekt", "Einbruchschäden"],
      priority: "Mittel"
    },
    {
      title: "Sturmschäden",
      examples: ["Dachschäden", "Glasbruch", "Abdeckungen"],
      priority: "Hoch"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Kontakt & Notfall</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            24/7 für Sie erreichbar – rufen Sie jetzt an oder melden Sie Ihren Notfall online. 
            Wir koordinieren umgehend den passenden Fachbetrieb für Ihre Region.
          </p>
        </div>

        {/* Emergency Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div 
                key={index}
                className={`${method.bgColor} ${method.textColor} rounded-2xl p-8 text-center ${method.urgent ? 'ring-4 ring-yellow-300' : ''}`}
                data-testid={`contact-method-${index}`}
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{method.title}</h3>
                <div className="text-xl font-bold mb-2">{method.primary}</div>
                <div className="text-sm opacity-90 mb-4">{method.secondary}</div>
                <p className="text-sm opacity-80 mb-6">{method.description}</p>
                
                {method.urgent && (
                  <div className="flex justify-center">
                    {index === 0 ? (
                      <a 
                        href="tel:+436766166646"
                        className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-bold transition-colors"
                        data-testid="contact-phone-button"
                      >
                        Jetzt anrufen
                      </a>
                    ) : (
                      <a 
                        href="https://wa.me/436766166646"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-bold transition-colors"
                        data-testid="contact-whatsapp-button"
                      >
                        WhatsApp öffnen
                      </a>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Main Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary">Kontaktinformationen</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                  <Phone className="w-6 h-6 text-emergency mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">24/7 Notfall-Hotline</h3>
                    <p className="text-2xl font-bold text-emergency">0676 6166646</p>
                    <p className="text-sm text-muted-foreground">
                      Für alle Notfälle und dringende Reparaturen
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">E-Mail</h3>
                    <p className="text-lg font-medium">office@notprofi24.at</p>
                    <p className="text-sm text-muted-foreground">
                      Für allgemeine Anfragen und Partneranmeldungen
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border">
                  <MapPin className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-lg">Einsatzgebiet</h3>
                    <p className="text-lg font-medium">Österreichweit</p>
                    <p className="text-sm text-muted-foreground">
                      Alle 9 Bundesländer mit lokalem Partnernetzwerk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Erreichbarkeit
              </h3>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-border">
                {businessHours.map((schedule, index) => (
                  <div 
                    key={index}
                    className={`flex justify-between items-center py-3 ${index < businessHours.length - 1 ? 'border-b border-border' : ''}`}
                  >
                    <span className={`font-medium ${schedule.special ? 'text-emergency' : ''}`}>
                      {schedule.day}
                    </span>
                    <span className={`font-bold ${schedule.special ? 'text-emergency' : 'text-green-600'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Areas and Emergency Types */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Einsatzgebiete</h3>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="bg-white p-3 rounded-lg border border-border text-center"
                    data-testid={`service-area-${index}`}
                  >
                    <MapPin className="w-4 h-4 text-primary mx-auto mb-1" />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Notfall-Kategorien</h3>
              <div className="space-y-4">
                {emergencyTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-sm border border-border"
                    data-testid={`emergency-type-${index}`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold">{type.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        type.priority === 'Sehr hoch' ? 'bg-red-100 text-red-800' :
                        type.priority === 'Hoch' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {type.priority}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, exampleIndex) => (
                        <span 
                          key={exampleIndex}
                          className="text-xs bg-muted px-2 py-1 rounded"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Response Times */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Unsere Reaktionszeiten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">5min</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Rückruf-Garantie</h3>
              <p className="text-muted-foreground text-sm">
                Binnen 5 Minuten bestätigen wir Ihren Notfall und die Beauftragung
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">15min</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Disposition</h3>
              <p className="text-muted-foreground text-sm">
                Der passende Fachbetrieb ist beauftragt und macht sich auf den Weg
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">60min</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Vor-Ort-Service</h3>
              <p className="text-muted-foreground text-sm">
                Je nach Entfernung und Notfall-Art ist der Fachbetrieb vor Ort
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-6">Benötigen Sie sofort Hilfe?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Zögern Sie nicht – bei Notfällen ist schnelle Hilfe entscheidend. 
            Kontaktieren Sie uns jetzt und wir organisieren umgehend die passende Lösung.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+436766166646" 
              className="bg-emergency hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors emergency-pulse"
              data-testid="final-phone-button"
            >
              <Phone className="w-5 h-5" />
              Jetzt anrufen: 0676 6166646
            </a>
            <a 
              href="https://wa.me/436766166646"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors"
              data-testid="final-whatsapp-button"
            >
              <MessageSquare className="w-5 h-5" />
              Notfall auf WhatsApp melden
            </a>
          </div>
        </div>

        {/* Emergency Modal */}
        <EmergencyModal 
          open={emergencyModalOpen} 
          onOpenChange={setEmergencyModalOpen} 
        />
      </div>
    </div>
  );
}
