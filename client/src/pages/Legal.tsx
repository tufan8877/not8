import { useEffect, useState } from "react";
import { FileText, Scale, Shield, Building, Mail, Phone } from "lucide-react";

interface LegalProps {
  page: "impressum" | "agb" | "datenschutz";
}

export default function Legal({ page }: LegalProps) {
  const [activeSection, setActiveSection] = useState(page);

  useEffect(() => {
    setActiveSection(page);
  }, [page]);

  const sections = [
    { id: "impressum", title: "Impressum", icon: Building },
    { id: "agb", title: "AGB", icon: Scale },
    { id: "datenschutz", title: "Datenschutz", icon: Shield }
  ];

  const renderImpressum = () => (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-8 text-primary flex items-center gap-3">
        <Building className="w-8 h-8" />
        Impressum
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-muted/30 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-primary">Firmenangaben</h3>
          <div className="space-y-2">
            <div><strong>Inhaber:</strong> Tufan Dönmezyürek</div>
            <div><strong>Adresse:</strong> Heiligenstädterstraße 152/6</div>
            <div>1190 Wien</div>
            <div>Österreich</div>
          </div>
        </div>
        
        <div className="bg-primary/5 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-4 text-primary">Kontakt</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary" />
              <span>0676 6166646</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <span>office@notprofi24.at</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">Gewerbeberechtigung</h3>
          <p>Freies Gewerbe "Vermittlung von Werk- und Dienstleistungsverträgen"</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">Aufsichtsbehörde</h3>
          <p>Bezirkshauptmannschaft/Magistrat des Firmensitzes [wird ergänzt]</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">Berufsrechtliche Regelungen</h3>
          <p>Gewerbeordnung 1994 (GewO 1994), BGBl. Nr. 194/1994 i.d.g.F.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">Verantwortlichkeit</h3>
          <p>
            notprofi24.at fungiert als koordinierende Stelle zwischen Auftraggebern und ausführenden Fachbetrieben. 
            Die Ausführung der Arbeiten und damit verbundene Gewährleistung liegt beim jeweiligen Fachbetrieb.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-3 text-primary">Haftungsausschluss</h3>
          <p>
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir keine Gewähr übernehmen. 
            Haftungsansprüche gegen uns, welche sich auf Schäden materieller oder ideeller Art beziehen, 
            die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung 
            fehlerhafter und unvollständiger Informationen verursacht wurden, sind ausgeschlossen.
          </p>
        </div>
      </div>
    </div>
  );

  const renderAGB = () => (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-8 text-primary flex items-center gap-3">
        <Scale className="w-8 h-8" />
        Allgemeine Geschäftsbedingungen
      </h1>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">§ 1 Geltungsbereich</h3>
          <p className="mb-4">
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen der notprofi24.at 
            im Bereich der Koordination von Notfall- und Reparaturdiensten.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">§ 2 Leistungsumfang</h3>
          <p className="mb-4">
            notprofi24.at koordiniert die Beauftragung qualifizierter Fachbetriebe für Notfall- und Reparaturdienste 
            in den Bereichen Sanitär, Elektro, Schlosserei, Dachdeckerei und Glaserei. 
            Wir fungieren als Vermittler zwischen Auftraggeber und ausführendem Betrieb.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>24/7 Koordination von Notfall-Einsätzen</li>
            <li>Qualifizierte Partnerbetriebe österreichweit</li>
            <li>Dokumentation der Einsätze</li>
            <li>Kundenservice und Kommunikation</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">§ 3 Vertragsverhältnis</h3>
          <p className="mb-4">
            Der Werkvertrag für die eigentliche Dienstleistung (Reparatur, Installation etc.) 
            kommt direkt zwischen Auftraggeber und ausführendem Fachbetrieb zustande. 
            notprofi24.at ist nicht Vertragspartner der eigentlichen Dienstleistung, 
            sondern übernimmt ausschließlich die Koordination.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">§ 4 Gewährleistung und Haftung</h3>
          <p className="mb-4">
            Gewährleistung und Haftung für die ausgeführten Arbeiten liegt ausschließlich beim 
            beauftragten Fachbetrieb gemäß den mit diesem vereinbarten Bedingungen. 
            notprofi24.at haftet nicht für Mängel an der erbrachten Dienstleistung.
          </p>
          <p className="mb-4">
            Unsere Haftung beschränkt sich auf die ordnungsgemäße Koordination und Vermittlung 
            qualifizierter Fachbetriebe. Für Schäden durch die Arbeiten der Fachbetriebe 
            übernehmen wir keine Haftung.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">§ 5 Kosten und Bezahlung</h3>
          <p className="mb-4">
            Für Auftraggeber (Hausverwaltungen und Privatkunden) entstehen durch unseren 
            Koordinationsservice keine zusätzlichen Kosten. Die Abrechnung der eigentlichen 
            Arbeitsleistung erfolgt direkt zwischen Auftraggeber und Fachbetrieb.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">§ 6 Datenschutz</h3>
          <p className="mb-4">
            Der Umgang mit personenbezogenen Daten erfolgt gemäß unserer Datenschutzerklärung 
            und den Bestimmungen der DSGVO. Daten werden nur zur Koordination der Einsätze 
            verwendet und an die entsprechenden Fachbetriebe weitergegeben.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">§ 7 Anwendbares Recht</h3>
          <p className="mb-4">
            Es gilt österreichisches Recht. Gerichtsstand ist der Firmensitz von notprofi24.at.
          </p>
        </div>
      </div>
    </div>
  );

  const renderDatenschutz = () => (
    <div className="prose max-w-none">
      <h1 className="text-3xl font-bold mb-8 text-primary flex items-center gap-3">
        <Shield className="w-8 h-8" />
        Datenschutzerklärung
      </h1>
      
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-bold text-blue-800 mb-3">Wichtige Information</h3>
        <p className="text-blue-700 text-sm">
          Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre personenbezogenen Daten 
          vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
      </div>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">1. Verantwortlicher</h3>
          <p className="mb-4">
            Verantwortlicher im Sinne der DSGVO ist:
          </p>
          <div className="bg-muted/30 rounded-lg p-4">
            <p><strong>Tufan Dönmezyürek</strong></p>
            <p>Heiligenstädterstraße 152/6</p>
            <p>1190 Wien, Österreich</p>
            <p>Telefon: 0676 6166646</p>
            <p>E-Mail: office@notprofi24.at</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">2. Erhobene Daten</h3>
          <p className="mb-4">Wir erheben und verarbeiten folgende personenbezogene Daten:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 border border-border">
              <h4 className="font-bold mb-3">Kontaktdaten</h4>
              <ul className="text-sm space-y-1">
                <li>• Name und Vorname</li>
                <li>• E-Mail-Adresse</li>
                <li>• Telefonnummer</li>
                <li>• Firmenname (optional)</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-border">
              <h4 className="font-bold mb-3">Einsatzdaten</h4>
              <ul className="text-sm space-y-1">
                <li>• Adresse des Einsatzortes</li>
                <li>• Beschreibung des Problems</li>
                <li>• Fotos (falls bereitgestellt)</li>
                <li>• Gewünschtes Gewerk</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">3. Zweck der Datenverarbeitung</h3>
          <p className="mb-4">Ihre Daten werden ausschließlich für folgende Zwecke verarbeitet:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Koordination von Notfall- und Reparaturdiensten</li>
            <li>Vermittlung an geeignete Fachbetriebe</li>
            <li>Kommunikation über den Einsatzstatus</li>
            <li>Dokumentation der erbrachten Leistungen</li>
            <li>Verbesserung unserer Dienstleistungen</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">4. Rechtsgrundlage</h3>
          <p className="mb-4">
            Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage von:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Art. 6 Abs. 1 lit. b DSGVO:</strong> Vertragserfüllung bzw. Durchführung vorvertraglicher Maßnahmen</li>
            <li><strong>Art. 6 Abs. 1 lit. f DSGVO:</strong> Berechtigtes Interesse an der ordnungsgemäßen Einsatzkoordination</li>
            <li><strong>Art. 6 Abs. 1 lit. a DSGVO:</strong> Einwilligung (bei freiwilligen Angaben wie Fotos)</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">5. Datenweitergabe</h3>
          <p className="mb-4">
            Ihre Daten werden nur in folgenden Fällen an Dritte weitergegeben:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>An den für Ihren Auftrag zuständigen Fachbetrieb (zur Durchführung der Arbeiten)</li>
            <li>An Auftragsverarbeiter (z.B. IT-Dienstleister) unter strikten Datenschutzauflagen</li>
            <li>Bei gesetzlichen Verpflichtungen oder behördlichen Anordnungen</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">6. Speicherdauer</h3>
          <p className="mb-4">
            Ihre Daten werden nur so lange gespeichert, wie es für die Zweckerfüllung erforderlich ist:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Auftragsdaten: 3 Jahre (für Gewährleistung und Dokumentation)</li>
            <li>Kontaktdaten: Bis zum Widerruf oder Ende der Geschäftsbeziehung</li>
            <li>Gesetzliche Aufbewahrungspflichten werden beachtet</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">7. Ihre Rechte</h3>
          <p className="mb-4">Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h4 className="font-bold text-green-800 mb-2">Auskunftsrecht</h4>
              <p className="text-sm text-green-700">Information über gespeicherte Daten</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Berichtigungsrecht</h4>
              <p className="text-sm text-blue-700">Korrektur falscher Daten</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h4 className="font-bold text-red-800 mb-2">Löschungsrecht</h4>
              <p className="text-sm text-red-700">Löschung nicht mehr benötigter Daten</p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h4 className="font-bold text-yellow-800 mb-2">Widerspruchsrecht</h4>
              <p className="text-sm text-yellow-700">Widerspruch gegen Datenverarbeitung</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">8. Cookies und Tracking</h3>
          <p className="mb-4">
            Unsere Website verwendet nur technisch notwendige Cookies. Tracking-Tools oder 
            Analyse-Cookies setzen wir nur mit Ihrer ausdrücklichen Einwilligung ein.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">9. Kontakt zum Datenschutz</h3>
          <p className="mb-4">
            Bei Fragen zum Datenschutz wenden Sie sich an:
          </p>
          <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
            <p><strong>Datenschutzbeauftragter:</strong> Tufan Dönmezyürek</p>
            <p><strong>E-Mail:</strong> office@notprofi24.at</p>
            <p><strong>Telefon:</strong> 0676 6166646</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary">10. Beschwerderecht</h3>
          <p className="mb-4">
            Sie haben das Recht, sich bei der österreichischen Datenschutzbehörde zu beschweren:
          </p>
          <div className="bg-muted/30 rounded-lg p-4">
            <p><strong>Österreichische Datenschutzbehörde</strong></p>
            <p>Barichgasse 40-42, 1030 Wien</p>
            <p>E-Mail: dsb@dsb.gv.at</p>
            <p>Website: www.dsb.gv.at</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "impressum":
        return renderImpressum();
      case "agb":
        return renderAGB();
      case "datenschutz":
        return renderDatenschutz();
      default:
        return renderImpressum();
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white rounded-xl shadow-sm border border-border p-2">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeSection === section.id
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:text-primary hover:bg-muted/50"
                  }`}
                  data-testid={`legal-nav-${section.id}`}
                >
                  <IconComponent className="w-4 h-4" />
                  {section.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8 md:p-12">
            {renderContent()}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-muted/30 rounded-xl">
          <p className="text-sm text-muted-foreground">
            Stand: Dezember 2024 | Bei Fragen zu rechtlichen Aspekten kontaktieren Sie uns unter{" "}
            <a href="tel:+436766166646" className="text-primary font-medium">0676 6166646</a>
          </p>
        </div>
      </div>
    </div>
  );
}
