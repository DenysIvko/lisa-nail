# Lisa Nail - Beauty Salon Website

## Overview

This is a modern, multilingual beauty salon website for Lisa Nail, a professional beauty salon in Warsaw, Poland. The application is built as a full-stack web application using React for the frontend, Express.js for the backend, and PostgreSQL for data storage. The site supports three languages (Polish, Ukrainian, and English) and provides comprehensive information about beauty services including manicure, eyebrow styling, and eyelash extensions.

## System Architecture

The application follows a modern full-stack architecture with clear separation between client and server:

- **Frontend**: React-based SPA with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript, serving both API endpoints and static files
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling, esbuild for server bundling

## Key Components

### Frontend Architecture
- **React SPA**: Single-page application with client-side routing using Wouter
- **Component Library**: shadcn/ui components built on top of Radix UI primitives
- **State Management**: React Query for server state, React Context for global state
- **Internationalization**: Custom translation system with context-based language switching
- **Styling**: Tailwind CSS with custom design tokens for brand consistency

### Backend Architecture
- **Express Server**: RESTful API with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Storage Abstraction**: Interface-based storage layer with in-memory implementation for development
- **SEO Features**: Dynamic sitemap generation and robots.txt serving

### Database Schema
- **Users Table**: Authentication system with username/password (prepared for future use)
- **Contacts Table**: Contact form submissions with multilingual support
- **Multilingual Support**: Language field in contact submissions for proper handling

## Data Flow

1. **Client Requests**: React components make API calls using React Query
2. **Server Processing**: Express routes handle API requests and database operations
3. **Database Operations**: Drizzle ORM manages all database interactions with type safety
4. **Response Handling**: Structured JSON responses with proper error handling
5. **State Management**: React Query caches and manages server state on the client

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon database
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing

### UI and Styling
- **@radix-ui/***: Accessible UI primitives for components
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant management for components

### Development Tools
- **vite**: Frontend build tool with hot module replacement
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast bundling for production server builds

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

- **Development**: `npm run dev` starts both frontend and backend in development mode
- **Build Process**: `npm run build` creates optimized bundles for both client and server
- **Production**: `npm run start` serves the production build
- **Database**: Uses environment variable `DATABASE_URL` for PostgreSQL connection
- **Static Files**: Vite builds client assets to `dist/public`, served by Express in production

### Environment Configuration
- **Development**: Uses Vite dev server with proxy to backend
- **Production**: Express serves static files from built client assets
- **Database**: Configured for PostgreSQL with Drizzle migrations

## Changelog
- June 21, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.