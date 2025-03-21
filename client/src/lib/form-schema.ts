import { insertBusinessPartnerSchema } from "@shared/schema";
import { z } from "zod";

// Extend the schema with more validation rules
export const registerSchema = insertBusinessPartnerSchema.extend({
  // Company Information (Step 1)
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  companyWebsite: z.string().url("Please enter a valid URL"),
  businessType: z.string().min(1, "Please select a business type"),
  companySize: z.string().min(1, "Please select company size"),
  companyDescription: z.string(),
  companyCountry: z.string().min(1, "Please select a country"),
  yearFounded: z.number().optional().nullable(),
  
  // Project Information (Step 2)
  platforms: z.array(z.string()).min(1, "Please select at least one platform"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  clientIndustries: z.array(z.string()).min(1, "Please select at least one industry"),
  caseStudy: z.string().optional().nullable(),
  
  // Expertise Information (Step 3)
  certifications: z.array(z.string()).optional(),
  yearsExperience: z.string().min(1, "Please select your years of experience"),
  monthlyAdSpend: z.string().optional().nullable(),
  teamExpertise: z.string().min(20, "Please provide more details about your team's expertise (at least 20 characters)"),
  references: z.string().optional().nullable(),
  
  // Terms (Step 4)
  agreedToTerms: z.boolean().refine(val => val === true, "You must agree to the terms and conditions"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;

// Default form values
export const defaultValues: RegisterFormValues = {
  companyName: "",
  companyWebsite: "",
  businessType: "",
  companySize: "",
  companyDescription: "",
  companyCountry: "",
  yearFounded: null,
  platforms: [],
  services: [],
  clientIndustries: [],
  caseStudy: "",
  certifications: [],
  yearsExperience: "",
  monthlyAdSpend: "",
  teamExpertise: "",
  references: "",
  agreedToTerms: false,
};
