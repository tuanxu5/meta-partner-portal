import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBusinessPartnerSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // Get all business partners
  app.get("/api/business-partners", async (req, res) => {
    try {
      const partners = await storage.getBusinessPartners();
      res.json(partners);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch business partners" });
    }
  });

  // Get a specific business partner by ID
  app.get("/api/business-partners/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }

      const partner = await storage.getBusinessPartner(id);
      if (!partner) {
        return res.status(404).json({ message: "Business partner not found" });
      }

      res.json(partner);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch business partner" });
    }
  });

  // Create a new business partner application
  app.post("/api/business-partners", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertBusinessPartnerSchema.parse(req.body);
      
      // Create the business partner
      const newPartner = await storage.createBusinessPartner(validatedData);
      
      res.status(201).json(newPartner);
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details
        });
      }
      
      res.status(500).json({ message: "Failed to create business partner application" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
