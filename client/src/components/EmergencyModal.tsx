import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertEmergencyReportSchema } from "@shared/schema";
import type { InsertEmergencyReport } from "@shared/schema";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle, CloudUpload } from "lucide-react";

interface EmergencyModalProps {
  trigger?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function EmergencyModal({ trigger, open, onOpenChange }: EmergencyModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertEmergencyReport>({
    resolver: zodResolver(insertEmergencyReportSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      address: "",
      state: "",
      trade: "",
      urgency: "",
      description: "",
      privacyAccepted: false,
    },
  });

  const createEmergencyReportMutation = useMutation({
    mutationFn: async (data: InsertEmergencyReport & { photo?: File }) => {
      const formData = new FormData();
      
      Object.entries(data).forEach(([key, value]) => {
        if (key !== "photo" && value !== undefined && value !== null) {
          formData.append(key, value.toString());
        }
      });

      if (data.photo) {
        formData.append("photo", data.photo);
      }

      const response = await fetch("/api/emergency-reports", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Fehler beim Senden der Notfallmeldung");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Notfall erfolgreich gemeldet",
        description: "Wir melden uns umgehend bei Ihnen.",
      });
      form.reset();
      setSelectedFile(null);
      const modalOpen = open !== undefined ? onOpenChange : setIsOpen;
      modalOpen?.(false);
      queryClient.invalidateQueries({ queryKey: ["/api/emergency-reports"] });
    },
    onError: (error) => {
      toast({
        title: "Fehler beim Senden",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertEmergencyReport) => {
    createEmergencyReportMutation.mutate({ ...data, photo: selectedFile || undefined });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Datei zu groß",
          description: "Die Datei darf maximal 5MB groß sein.",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const modalProps = open !== undefined ? { open, onOpenChange } : { open: isOpen, onOpenChange: setIsOpen };

  return (
    <Dialog {...modalProps}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="emergency-modal">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-primary">
            <AlertTriangle className="text-emergency" />
            Notfall melden
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ihr vollständiger Name" 
                        data-testid="input-emergency-name"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Firma (optional)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Firmenname oder Hausverwaltung" 
                        data-testid="input-emergency-company"
                        {...field}
                        value={field.value || ""} 
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
                        placeholder="ihre@email.at" 
                        data-testid="input-emergency-email"
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
                        data-testid="input-emergency-phone"
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
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adresse + Stiege/Top *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Straße, Hausnummer, Stiege/Top" 
                      data-testid="input-emergency-address"
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
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bundesland *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-emergency-state">
                          <SelectValue placeholder="Bundesland wählen" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="wien">Wien</SelectItem>
                        <SelectItem value="niederoesterreich">Niederösterreich</SelectItem>
                        <SelectItem value="oberoesterreich">Oberösterreich</SelectItem>
                        <SelectItem value="steiermark">Steiermark</SelectItem>
                        <SelectItem value="tirol">Tirol</SelectItem>
                        <SelectItem value="salzburg">Salzburg</SelectItem>
                        <SelectItem value="kaernten">Kärnten</SelectItem>
                        <SelectItem value="vorarlberg">Vorarlberg</SelectItem>
                        <SelectItem value="burgenland">Burgenland</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="trade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gewerk *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-emergency-trade">
                          <SelectValue placeholder="Gewerk wählen" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="installateur">Installateur</SelectItem>
                        <SelectItem value="elektriker">Elektriker</SelectItem>
                        <SelectItem value="schlosser">Schlosser</SelectItem>
                        <SelectItem value="dachdecker">Dachdecker</SelectItem>
                        <SelectItem value="glaser">Glaser</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="urgency"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Dringlichkeit *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-3 gap-3"
                      data-testid="radio-emergency-urgency"
                    >
                      <div className="flex items-center space-x-2 border border-input rounded-lg p-3 hover:bg-muted cursor-pointer">
                        <RadioGroupItem value="hoch" id="hoch" />
                        <Label htmlFor="hoch" className="text-red-600 font-medium cursor-pointer">Hoch</Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-input rounded-lg p-3 hover:bg-muted cursor-pointer">
                        <RadioGroupItem value="mittel" id="mittel" />
                        <Label htmlFor="mittel" className="text-yellow-600 font-medium cursor-pointer">Mittel</Label>
                      </div>
                      <div className="flex items-center space-x-2 border border-input rounded-lg p-3 hover:bg-muted cursor-pointer">
                        <RadioGroupItem value="niedrig" id="niedrig" />
                        <Label htmlFor="niedrig" className="text-green-600 font-medium cursor-pointer">Niedrig</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Beschreibung des Problems *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Beschreiben Sie kurz Ihr Problem..." 
                      rows={4}
                      data-testid="textarea-emergency-description"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Label className="text-sm font-medium mb-2 block">Foto Upload (optional)</Label>
              <div className="border-2 border-dashed border-input rounded-lg p-6 text-center">
                <CloudUpload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground mb-2">Foto des Problems hochladen</p>
                <Input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange}
                  className="hidden" 
                  id="photo-upload"
                  data-testid="input-emergency-photo"
                />
                <Label 
                  htmlFor="photo-upload" 
                  className="bg-secondary text-white px-4 py-2 rounded cursor-pointer hover:bg-secondary/90 inline-block"
                >
                  Datei auswählen
                </Label>
                {selectedFile && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Ausgewählt: {selectedFile.name}
                  </p>
                )}
              </div>
            </div>

            <FormField
              control={form.control}
              name="privacyAccepted"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      data-testid="checkbox-emergency-privacy"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <Label className="text-sm text-muted-foreground">
                      Ich stimme der{" "}
                      <a href="/datenschutz" className="text-primary underline" target="_blank">
                        Datenschutzerklärung
                      </a>{" "}
                      zu und erteile die Einverständnis zur Verarbeitung meiner Daten zum Zweck der Notfallbearbeitung. *
                    </Label>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-3 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-emergency hover:bg-orange-600 text-white"
                disabled={createEmergencyReportMutation.isPending}
                data-testid="button-submit-emergency"
              >
                {createEmergencyReportMutation.isPending ? "Wird gesendet..." : "Notfall jetzt melden"}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  const modalOpen = open !== undefined ? onOpenChange : setIsOpen;
                  modalOpen?.(false);
                }}
                data-testid="button-cancel-emergency"
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
