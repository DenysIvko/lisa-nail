import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateSitemap } from "./sitemap";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message, language } = req.body;
      
      const contact = await storage.createContact({
        name,
        email,
        phone: phone || "",
        message,
        language: language || "pl"
      });
      
      res.json({ success: true, contact });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ success: false, error: "Failed to submit contact form" });
    }
  });

  // XML Sitemap endpoint
  app.get("/sitemap.xml", (req, res) => {
    res.header('Content-Type', 'application/xml');
    res.send(generateSitemap());
  });

  // Robots.txt endpoint
  app.get("/robots.txt", (req, res) => {
    res.type('text/plain');
    res.send(`User-agent: *
Allow: /
Sitemap: https://lisanail.pl/sitemap.xml`);
  });

  const httpServer = createServer(app);

  return httpServer;
}
