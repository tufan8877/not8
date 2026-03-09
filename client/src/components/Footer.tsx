import { Link } from "wouter";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="w-10 h-10 text-white" />
              <div>
                <div className="font-bold text-xl">Notprofi24</div>
                <div className="text-sm text-blue-200">Österreichweit für Sie da</div>
              </div>
            </div>
            <p className="text-blue-100 mb-4">
              Schnelle Hilfe bei Notfällen. Wir koordinieren qualifizierte Fachbetriebe in ganz Österreich.
            </p>
            <div className="text-2xl font-bold text-emergency">
              24/7: 0676 6166646
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Leistungen</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/leistungen#installateur" className="hover:text-white" data-testid="footer-installateur">Installateur</Link></li>
              <li><Link href="/leistungen#elektriker" className="hover:text-white" data-testid="footer-elektriker">Elektriker</Link></li>
              <li><Link href="/leistungen#schlosser" className="hover:text-white" data-testid="footer-schlosser">Schlosser</Link></li>
              <li><Link href="/leistungen#dachdecker" className="hover:text-white" data-testid="footer-dachdecker">Dachdecker</Link></li>
              <li><Link href="/leistungen#glaser" className="hover:text-white" data-testid="footer-glaser">Glaser</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-blue-200">
              <li><Link href="/impressum" className="hover:text-white" data-testid="footer-impressum">Impressum</Link></li>
              <li><Link href="/agb" className="hover:text-white" data-testid="footer-agb">AGB</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white" data-testid="footer-datenschutz">Datenschutz</Link></li>
              <li><Link href="/kontakt" className="hover:text-white" data-testid="footer-kontakt">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Notprofi24.at – Österreichweit für Sie da. 24/7: 0676 6166646</p>
        </div>
      </div>
    </footer>
  );
}
