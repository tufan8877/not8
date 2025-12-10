import { 
  type User, 
  type InsertUser, 
  type EmergencyReport, 
  type InsertEmergencyReport,
  type PartnerApplication,
  type InsertPartnerApplication
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createEmergencyReport(report: InsertEmergencyReport): Promise<EmergencyReport>;
  getEmergencyReports(): Promise<EmergencyReport[]>;
  getEmergencyReport(id: string): Promise<EmergencyReport | undefined>;
  
  createPartnerApplication(application: InsertPartnerApplication): Promise<PartnerApplication>;
  getPartnerApplications(): Promise<PartnerApplication[]>;
  getPartnerApplication(id: string): Promise<PartnerApplication | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private emergencyReports: Map<string, EmergencyReport>;
  private partnerApplications: Map<string, PartnerApplication>;

  constructor() {
    this.users = new Map();
    this.emergencyReports = new Map();
    this.partnerApplications = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createEmergencyReport(insertReport: InsertEmergencyReport): Promise<EmergencyReport> {
    const id = randomUUID();
    const report: EmergencyReport = {
      ...insertReport,
      id,
      company: insertReport.company || null,
      photoPath: insertReport.photoPath || null,
      privacyAccepted: insertReport.privacyAccepted ? 1 : 0,
      createdAt: new Date(),
    };
    this.emergencyReports.set(id, report);
    return report;
  }

  async getEmergencyReports(): Promise<EmergencyReport[]> {
    return Array.from(this.emergencyReports.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async getEmergencyReport(id: string): Promise<EmergencyReport | undefined> {
    return this.emergencyReports.get(id);
  }

  async createPartnerApplication(insertApplication: InsertPartnerApplication): Promise<PartnerApplication> {
    const id = randomUUID();
    const application: PartnerApplication = {
      ...insertApplication,
      id,
      trades: JSON.stringify(insertApplication.trades),
      website: insertApplication.website || null,
      message: insertApplication.message || null,
      privacyAccepted: insertApplication.privacyAccepted ? 1 : 0,
      createdAt: new Date(),
    };
    this.partnerApplications.set(id, application);
    return application;
  }

  async getPartnerApplications(): Promise<PartnerApplication[]> {
    return Array.from(this.partnerApplications.values()).sort((a, b) => 
      new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
    );
  }

  async getPartnerApplication(id: string): Promise<PartnerApplication | undefined> {
    return this.partnerApplications.get(id);
  }
}

export const storage = new MemStorage();
