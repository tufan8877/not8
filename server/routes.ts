import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertEmergencyReportSchema, insertPartnerApplicationSchema } from "@shared/schema";
import multer from "multer";
import path from "path";
import { randomUUID } from "crypto";

// Configure multer for file uploads
const storage_multer = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = randomUUID();
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage_multer,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      return cb(new Error('Nur Bilddateien sind erlaubt!'));
    }
    cb(null, true);
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Emergency report endpoints
  app.post("/api/emergency-reports", upload.single('photo'), async (req, res) => {
    try {
      // Parse the form data
      const reportData = {
        ...req.body,
        privacyAccepted: req.body.privacyAccepted === 'true',
        photoPath: req.file?.filename || null,
      };

      // Validate the data
      const validatedData = insertEmergencyReportSchema.parse(reportData);
      
      // Create the emergency report
      const report = await storage.createEmergencyReport(validatedData);
      
      res.json({ 
        success: true, 
        message: "Notfall erfolgreich gemeldet. Wir melden uns umgehend bei Ihnen.",
        id: report.id 
      });
    } catch (error) {
      console.error("Error creating emergency report:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Fehler beim Verarbeiten der Notfallmeldung" 
      });
    }
  });

  app.get("/api/emergency-reports", async (req, res) => {
    try {
      const reports = await storage.getEmergencyReports();
      res.json(reports);
    } catch (error) {
      console.error("Error fetching emergency reports:", error);
      res.status(500).json({ message: "Fehler beim Laden der Notfallmeldungen" });
    }
  });

  app.get("/api/emergency-reports/:id", async (req, res) => {
    try {
      const report = await storage.getEmergencyReport(req.params.id);
      if (!report) {
        return res.status(404).json({ message: "Notfallmeldung nicht gefunden" });
      }
      res.json(report);
    } catch (error) {
      console.error("Error fetching emergency report:", error);
      res.status(500).json({ message: "Fehler beim Laden der Notfallmeldung" });
    }
  });

  // Partner application endpoints
  app.post("/api/partner-applications", async (req, res) => {
    try {
      const applicationData = {
        ...req.body,
        privacyAccepted: req.body.privacyAccepted === 'true' || req.body.privacyAccepted === true,
        trades: Array.isArray(req.body.trades) ? req.body.trades : 
               typeof req.body.trades === 'string' ? JSON.parse(req.body.trades) : [],
      };

      // Validate the data
      const validatedData = insertPartnerApplicationSchema.parse(applicationData);
      
      // Create the partner application
      const application = await storage.createPartnerApplication(validatedData);
      
      res.json({ 
        success: true, 
        message: "Partneranfrage erfolgreich gesendet. Wir melden uns zeitnah bei Ihnen.",
        id: application.id 
      });
    } catch (error) {
      console.error("Error creating partner application:", error);
      res.status(400).json({ 
        success: false, 
        message: error instanceof Error ? error.message : "Fehler beim Verarbeiten der Partneranfrage" 
      });
    }
  });

  app.get("/api/partner-applications", async (req, res) => {
    try {
      const applications = await storage.getPartnerApplications();
      res.json(applications);
    } catch (error) {
      console.error("Error fetching partner applications:", error);
      res.status(500).json({ message: "Fehler beim Laden der Partneranfragen" });
    }
  });

  app.get("/api/partner-applications/:id", async (req, res) => {
    try {
      const application = await storage.getPartnerApplication(req.params.id);
      if (!application) {
        return res.status(404).json({ message: "Partneranfrage nicht gefunden" });
      }
      res.json(application);
    } catch (error) {
      console.error("Error fetching partner application:", error);
      res.status(500).json({ message: "Fehler beim Laden der Partneranfrage" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
