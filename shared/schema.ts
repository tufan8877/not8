import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const emergencyReports = pgTable("emergency_reports", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address").notNull(),
  state: text("state").notNull(),
  trade: text("trade").notNull(),
  urgency: text("urgency").notNull(),
  description: text("description").notNull(),
  photoPath: text("photo_path"),
  privacyAccepted: integer("privacy_accepted").notNull().default(1),
  createdAt: timestamp("created_at").defaultNow(),
});

export const partnerApplications = pgTable("partner_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  contactPerson: text("contact_person").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  trades: text("trades").notNull(), // JSON array as string
  serviceArea: text("service_area").notNull(),
  uidNumber: text("uid_number").notNull(),
  website: text("website"),
  message: text("message"),
  privacyAccepted: integer("privacy_accepted").notNull().default(1),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertEmergencyReportSchema = createInsertSchema(emergencyReports).omit({
  id: true,
  createdAt: true,
}).extend({
  privacyAccepted: z.boolean(),
});

export const insertPartnerApplicationSchema = createInsertSchema(partnerApplications).omit({
  id: true,
  createdAt: true,
}).extend({
  trades: z.array(z.string()).min(1, "Mindestens ein Gewerk muss ausgewählt werden"),
  privacyAccepted: z.boolean(),
});

export type InsertEmergencyReport = z.infer<typeof insertEmergencyReportSchema>;
export type EmergencyReport = typeof emergencyReports.$inferSelect;

export type InsertPartnerApplication = z.infer<typeof insertPartnerApplicationSchema>;
export type PartnerApplication = typeof partnerApplications.$inferSelect;

// Users table kept for compatibility
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
