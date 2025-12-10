import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import PropertyManagement from "@/pages/PropertyManagement";
import PartnerServices from "@/pages/PartnerServices";
import Pricing from "@/pages/Pricing";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Legal from "@/pages/Legal";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/leistungen" component={Services} />
        <Route path="/hausverwaltungen" component={PropertyManagement} />
        <Route path="/partner" component={PartnerServices} />
        <Route path="/preise" component={Pricing} />
        <Route path="/kontakt" component={Contact} />
        <Route path="/faq" component={FAQ} />
        <Route path="/impressum" component={() => <Legal page="impressum" />} />
        <Route path="/agb" component={() => <Legal page="agb" />} />
        <Route path="/datenschutz" component={() => <Legal page="datenschutz" />} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
