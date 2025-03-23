import { type BusinessPartner, type InsertBusinessPartner, type InsertUser, type User } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Business Partner methods
  createBusinessPartner(partner: InsertBusinessPartner): Promise<BusinessPartner>;
  getBusinessPartners(): Promise<BusinessPartner[]>;
  getBusinessPartner(id: number): Promise<BusinessPartner | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private businessPartners: Map<number, BusinessPartner>;
  private userId: number;
  private businessPartnerId: number;

  constructor() {
    this.users = new Map();
    this.businessPartners = new Map();
    this.userId = 1;
    this.businessPartnerId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createBusinessPartner(partner: InsertBusinessPartner): Promise<BusinessPartner> {
    const id = this.businessPartnerId++;
    const now = new Date();
    const businessPartner: BusinessPartner = {
      ...partner,
      id,
      createdAt: now,
      status: "pending",
    };
    this.businessPartners.set(id, businessPartner);
    return businessPartner;
  }

  async getBusinessPartners(): Promise<BusinessPartner[]> {
    return Array.from(this.businessPartners.values());
  }

  async getBusinessPartner(id: number): Promise<BusinessPartner | undefined> {
    return this.businessPartners.get(id);
  }
}

export const storage = new MemStorage();