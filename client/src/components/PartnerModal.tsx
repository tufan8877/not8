import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertPartnerApplicationSchema } from "@shared/schema";
import type { InsertPartnerApplication } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Handshake } from "lucide-react";

interface PartnerModalProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function PartnerModal({ trigger, open, onOpenChange }: PartnerModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertPartnerApplication>({
    resolver: zodResolver(insertPartnerApplicationSchema),
    defaultValues: {
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      trades: [],
      serviceArea: "",
      uidNumber: "",
      website: "",
      message: "",
      privacyAccepted: false,
    },
  });

  const createPartnerApplicationMutation = useMutation({
    mutationFn: async (data: InsertPartnerApplication) => {
      const response = await apiRequest("POST", "/api/partner-applications", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Partneranfrage erfolgreich gesendet",
        description: "Wir melden uns zeitnah bei Ihnen.",
      });
      form.reset();
      const modalOpen = open !== undefined ? onOpenChange : setIsOpen;
      modalOpen?.(false);
      queryClient.invalidateQueries({ queryKey: ["/api/partner-applications"] });
    },
    onError: (error) => {
      toast({
        title: "Fehler beim Senden",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertPartnerApplication) => {
    createPartnerApplicationMutation.mutate(data);
  };

  const trades = [
    { id: "installateur", label: "Installateur" },
    { id: "elektriker", label: "Elektriker" },
    { id: "schlosser", label: "Schlosser" },
    { id: "dachdecker", label: "Dachdecker" },
    { id: "glaser", label: "Glaser" },
  ];

  const modalProps = open !== undefined ? { open, onOpenChange } : { open: isOpen, onOpenChange: setIsOpen };

  return (
    <Dialog {...modalProps}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="partner-modal">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-primary">
            <Handshake className="text-primary" />
            Partner werden
          </DialogTitle>
        </DialogHeader>
        
        <div className="bg-muted/50 rounded-lg p-4 mb-6">
          <h3 className="font-semibold mb-2 text-primary">Ihre Vorteile als Partner:</h3>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>• Mehr Aufträge ohne Werbekosten</li>
            <li>• Faire Fixgebühr von nur 30€ pro Auftrag</li>
            <li>• Klare Abläufe und schnelle Abwicklung</li>
          </ul>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Firmenname *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ihre Firma GmbH" 
                        data-testid="input-partner-company"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactPerson"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ansprechpartner *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Vor- und Nachname" 
                        data-testid="input-partner-contact"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail *</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="kontakt@ihrefirma.at" 
                        data-testid="input-partner-email"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon *</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel" 
                        placeholder="+43 XXX XXX XXXX" 
                        data-testid="input-partner-phone"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="trades"
              render={() => (
                <FormItem>
                  <FormLabel>Gewerke * (Mehrfachauswahl möglich)</FormLabel>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {trades.map((trade) => (
                      <FormField
                        key={trade.id}
                        control={form.control}
                        name="trades"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={trade.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(trade.id)}
                                  onCheckedChange={(checked) => {
                                    const currentValue = field.value || [];
                                    const newValue = checked
                                      ? [...currentValue, trade.id]
                                      : currentValue.filter((value) => value !== trade.id);
                                    field.onChange(newValue);
                                  }}
                                  data-testid={`checkbox-partner-trade-${trade.id}`}
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal cursor-pointer">
                                {trade.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="serviceArea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Einsatzgebiet *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="PLZ-Bereich oder Bundesland" 
                      data-testid="input-partner-service-area"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="uidNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>UID-Nr. *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="ATU12345678" 
                        data-testid="input-partner-uid"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website (optional)</FormLabel>
                    <FormControl>
                      <Input 
                        type="url" 
                        placeholder="https://www.ihrefirma.at" 
                        data-testid="input-partner-website"
                        {...field}
                        value={field.value || ""} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nachricht</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Weitere Informationen zu Ihrem Betrieb..." 
                      rows={4}
                      data-testid="textarea-partner-message"
                      {...field}
                      value={field.value || ""} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="privacyAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      data-testid="checkbox-partner-privacy"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <Label className="text-sm text-muted-foreground">
                      Ich stimme der{" "}
                      <a href="/datenschutz" className="text-primary underline" target="_blank">
                        Datenschutzerklärung
                      </a>{" "}
                      zu und erteile die Einverständnis zur Verarbeitung meiner Daten zum Zweck der Partneraufnahme. *
                    </Label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-primary hover:bg-primary/90 text-white"
                disabled={createPartnerApplicationMutation.isPending}
                data-testid="button-submit-partner"
              >
                {createPartnerApplicationMutation.isPending ? "Wird gesendet..." : "Partneranfrage senden"}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  const modalOpen = open !== undefined ? onOpenChange : setIsOpen;
                  modalOpen?.(false);
                }}
                data-testid="button-cancel-partner"
              >
                Abbrechen
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
