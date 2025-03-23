import { boolean, integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Business Partner Registration Schema
export const businessPartners = pgTable("business_partners", {
  id: serial("id").primaryKey(),
  
  // Company Information
  companyName: text("company_name").notNull(),
  companyWebsite: text("company_website").notNull(),
  whatsappNumber: text("whatsapp_number").notNull(),
  businessType: text("business_type").notNull(),
  companySize: text("company_size").notNull(),
  companyDescription: text("company_description").notNull(),
  companyCountry: text("company_country").notNull(),
  yearFounded: integer("year_founded"),
  
  // Project Information
  platforms: text("platforms").array().notNull(),
  services: text("services").array().notNull(),
  clientIndustries: text("client_industries").array().notNull(),
  caseStudy: text("case_study"),
  
  // Expertise Information
  certifications: text("certifications").array(),
  yearsExperience: text("years_experience").notNull(),
  monthlyAdSpend: text("monthly_ad_spend"),
  teamExpertise: text("team_expertise").notNull(),
  references: text("references"),
  
  // Metadata
  agreedToTerms: boolean("agreed_to_terms").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  status: text("status").default("pending").notNull(),
});

export const insertBusinessPartnerSchema = createInsertSchema(businessPartners).omit({
  id: true,
  createdAt: true,
  status: true,
});

export type InsertBusinessPartner = z.infer<typeof insertBusinessPartnerSchema>;
export type BusinessPartner = typeof businessPartners.$inferSelect;
