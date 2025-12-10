import { useState } from "react";
import { Button } from "@/components/ui/button";
import EmergencyModal from "@/components/EmergencyModal";
import PartnerModal from "@/components/PartnerModal";
import { 
  Phone, 
  AlertTriangle, 
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
  MessageSquare
} from "lucide-react";

export default function Home() {
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  const services = [
    {
      icon: Wrench,
      title: "Installateur",
      description: "Rohrbrüche, verstopfte Abflüsse, defekte Heizungen, Wasserschäden – wir organisieren schnelle Hilfe bei allen Sanitärnotfällen.",
      tasks: [
        "Rohrbruch-Reparaturen",
        "Verstopfungen beseitigen", 
        "Heizungsausfälle",
        "Wasserschäden eindämmen"
      ],
      bgColor: "bg-blue-100",
      iconColor: "text-primary"
    },
    {
      icon: Zap,
      title: "Elektriker", 
      description: "Stromausfälle, defekte Sicherungen, Kurzschlüsse – unsere Elektrofachkräfte sorgen für sichere Lösungen.",
      tasks: [
        "Stromausfall beheben",
        "Sicherungen erneuern",
        "Kurzschluss-Reparatur", 
        "Notbeleuchtung installieren"
      ],
      bgColor: "bg-yellow-100",
      iconColor: "text-warning"
    },
    {
      icon: Key,
      title: "Schlosser",
      description: "Türöffnungen, Schloss-Reparaturen, Sicherheitstechnik – wir besorgen Ihnen wieder Zugang zu Ihren Räumen.",
      tasks: [
        "Türöffnung ohne Beschädigung",
        "Schlösser austauschen",
        "Einbruchsschäden reparieren",
        "Sicherheitstechnik installieren"
      ],
      bgColor: "bg-orange-100", 
      iconColor: "text-emergency"
    },
    {
      icon: HomeIcon,
      title: "Dachdecker",
      description: "Sturmschäden, undichte Dächer, abgedeckte Ziegel – schnelle Notabdichtung verhindert weitere Schäden.",
      tasks: [
        "Notabdichtung bei Unwetter",
        "Sturmschäden beheben",
        "Dachrinnen reparieren",
        "Ziegel ersetzen"
      ],
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Eye,
      title: "Glaser",
      description: "Einbruchschäden, zerbrochene Scheiben, Schaufenster – professionelle Glasreparatur für Sicherheit und Schutz.",
      tasks: [
        "Notverglasungen",
        "Schaufenster reparieren", 
        "Einbruchschäden beseitigen",
        "Sicherheitsglas installieren"
      ],
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ];

  const states = [
    "Wien", "Niederösterreich", "Oberösterreich", "Steiermark", 
    "Tirol", "Salzburg", "Kärnten", "Vorarlberg", "Burgenland"
  ];

  const testimonials = [
    {
      rating: 5,
      text: "Endlich ein Ansprechpartner für alle Notfälle. Die Reaktionszeit war beeindruckend schnell!",
      author: "Maria Huber",
      role: "Hausverwaltung Wien"
    },
    {
      rating: 5,
      text: "Beim Rohrbruch am Sonntag waren innerhalb von 30 Minuten Fachkräfte vor Ort. Perfekt!",
      author: "Thomas Maier", 
      role: "Privatkunde Salzburg"
    },
    {
      rating: 5,
      text: "Professionelle Abwicklung, faire Preise und verlässliche Partner. Gerne wieder!",
      author: "Andreas Schmid",
      role: "Immobilienverwaltung Linz"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Notprofi24",
            "url": "https://notprofi24.at",
            "telephone": "+436766166646",
            "areaServed": "AT",
            "serviceType": "Emergency Services Coordination",
            "availableService": [
              {"@type": "Service", "name": "Installateur Notdienst"},
              {"@type": "Service", "name": "Elektriker Notdienst"},  
              {"@type": "Service", "name": "Schlosser Notdienst"},
              {"@type": "Service", "name": "Dachdecker Notdienst"},
              {"@type": "Service", "name": "Glaser Notdienst"}
            ]
          })
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Schnelle Hilfe. Österreichweit.
              <span className="block text-warning">Ein Anruf – wir organisieren den Rest.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Für Hausverwaltungen & Privatkunden: Sanitär, Elektro, Schloss, Dach, Glas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="tel:+436766166646" 
                className="bg-emergency hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors emergency-pulse"
                data-testid="hero-phone-button"
              >
                <Phone className="w-5 h-5" />
                Jetzt anrufen: 0676 6166646
              </a>
              <a 
                href="https://wa.me/436766166646" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors"
                data-testid="hero-whatsapp-button"
              >
                <MessageSquare className="w-5 h-5" />
                Notfall auf WhatsApp melden
              </a>
              <a 
                href="mailto:office@notprofi24.at"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-3 transition-colors"
                data-testid="hero-partner-button"
              >
                <Handshake className="w-5 h-5" />
                Partner werden
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">24/7 Erreichbar</h3>
                <p className="text-blue-100">Rund um die Uhr für Sie da</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Österreichweit</h3>
                <p className="text-blue-100">In allen 9 Bundesländern</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-lg mb-2">Qualifizierte Partner</h3>
                <p className="text-blue-100">Geprüfte Fachbetriebe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Ein zentraler Ansprechpartner für alle Fälle
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Schluss mit dem Herumtelefonieren bei Notfällen. Notprofi24 koordiniert für Sie den passenden Fachbetrieb 
              und steuert den gesamten Einsatz. Egal ob Rohrbruch, Stromausfall oder defektes Schloss – 
              ein Anruf genügt und wir organisieren die schnelle Hilfe.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Unsere Leistungsbereiche</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fünf Gewerke, ein Ansprechpartner. Wir koordinieren qualifizierte Fachbetriebe für alle Notfälle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.title}
                  className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-border"
                  data-testid={`service-card-${service.title.toLowerCase()}`}
                >
                  <div className={`w-16 h-16 ${service.bgColor} rounded-full flex items-center justify-center mb-6`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    {service.tasks.map((task, index) => (
                      <li key={index}>• {task}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Property Management Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Speziell für Hausverwaltungen</h2>
              <p className="text-lg text-muted-foreground">
                Ein Ansprechpartner statt fünf. Dokumentierte Einsätze. Verlässliche Koordination.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Modern office building representing professional property management" 
                  className="rounded-xl shadow-lg w-full h-auto" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Ihre Vorteile im Überblick</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "24/7 Erreichbarkeit",
                      description: "Rückruf binnen 5 Minuten, Disposition unter 15 Minuten"
                    },
                    {
                      title: "Ein Ansprechpartner", 
                      description: "Für alle fünf Gewerke – keine mehrfachen Kontakte nötig"
                    },
                    {
                      title: "Dokumentierte Einsätze",
                      description: "Vollständige Dokumentation für Ihre Unterlagen"
                    },
                    {
                      title: "Keine Zusatzkosten",
                      description: "Für Sie als Hausverwaltung entstehen keine zusätzlichen Kosten"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-muted/50 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-primary">Unser Service-Ablauf</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Anliegen melden</h4>
                  <p className="text-muted-foreground text-sm">Sie rufen an oder nutzen unser Online-Formular</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Wir koordinieren</h4>
                  <p className="text-muted-foreground text-sm">Sofortige Disposition und Beauftragung des Fachbetriebs</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Fachbetrieb fährt los</h4>
                  <p className="text-muted-foreground text-sm">Qualifizierte Lösung direkt vor Ort</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Customer Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Für Privatkunden</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Kein Herumtelefonieren – wir finden den passenden Fachbetrieb und koordinieren den Einsatz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">Schnelle Hilfe</h3>
                <p className="text-muted-foreground">
                  Ein Anruf genügt – wir organisieren sofort den passenden Fachbetrieb für Ihr Problem.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Transparente Abläufe</h3>
                <p className="text-muted-foreground">
                  Sie erhalten alle Informationen über Kosten und Ablauf, bevor der Einsatz beginnt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Das sagen unsere Kunden</h2>
            <p className="text-lg text-muted-foreground">Vertrauen durch Qualität und Zuverlässigkeit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-lg border border-border"
                data-testid={`testimonial-${index}`}
              >
                <div className="flex items-center mb-4">
                  <div className="flex text-warning">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Österreichweit verfügbar</h2>
            <p className="text-xl text-blue-100">In allen 9 Bundesländern für Sie da</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {states.map((state, index) => (
              <div 
                key={state}
                className="text-center p-4 bg-white/10 rounded-lg"
                data-testid={`state-${state.toLowerCase().replace(/ö/g, 'oe').replace(/ä/g, 'ae').replace(/ü/g, 'ue')}`}
              >
                <MapPin className="w-6 h-6 mx-auto mb-2" />
                <p className="font-medium">{state}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modals */}
      <EmergencyModal 
        open={emergencyModalOpen} 
        onOpenChange={setEmergencyModalOpen} 
      />
      <PartnerModal 
        open={partnerModalOpen} 
        onOpenChange={setPartnerModalOpen} 
      />
    </div>
  );
}
