import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const dataSources = pgTable("data_sources", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  type: text("type").notNull(), // 'excel', 'database', 'api', etc.
  config: jsonb("config"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const dashboardMetrics = pgTable("dashboard_metrics", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // 'esg' or 'financial'
  name: text("name").notNull(),
  value: text("value").notNull(),
  change: text("change"),
  status: text("status"), // 'excellent', 'good', 'needs_attention'
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
  isUser: boolean("is_user").notNull(),
  response: text("response"),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertDataSourceSchema = createInsertSchema(dataSources).omit({
  id: true,
  createdAt: true,
});

export const insertDashboardMetricSchema = createInsertSchema(dashboardMetrics).omit({
  id: true,
  updatedAt: true,
});

export const insertChatMessageSchema = createInsertSchema(chatMessages).omit({
  id: true,
  timestamp: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type DataSource = typeof dataSources.$inferSelect;
export type DashboardMetric = typeof dashboardMetrics.$inferSelect;
export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertDataSource = z.infer<typeof insertDataSourceSchema>;
export type InsertDashboardMetric = z.infer<typeof insertDashboardMetricSchema>;
export type InsertChatMessage = z.infer<typeof insertChatMessageSchema>;
