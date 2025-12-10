# Overview

This is a modern, GDPR-compliant emergency coordination service website for notprofi24.at, serving customers across Austria. The platform connects property management companies and private customers with qualified tradespeople across five key sectors: plumbing (Installateur), electrical (Elektriker), locksmith (Schlosser), roofing (Dachdecker), and glazing (Glaser) services. The website provides 24/7 emergency response coordination with guaranteed response times and streamlined communication between customers and service providers.

# Recent Changes

**December 8, 2024** - Initial Replit Environment Setup:
- Installed Node.js 20 and all project dependencies
- Created PostgreSQL database and applied schema migrations via Drizzle Kit
- Configured development workflow running on port 5000 with Vite HMR
- Set up deployment configuration for autoscale with build and run commands
- Verified application running successfully in Replit environment

# Replit Environment Setup

## Development
- **Workflow**: `npm run dev` - Runs Express server with Vite middleware on port 5000
- **Database**: PostgreSQL via Replit's built-in database (connection via DATABASE_URL)
- **Port**: Application serves on 0.0.0.0:5000 (frontend + backend unified)
- **Hot Reload**: Vite HMR configured with `allowedHosts: true` for Replit proxy compatibility

## Deployment
- **Build Command**: `npm run build` - Builds frontend (Vite) and backend (esbuild)
- **Run Command**: `node dist/index.js` - Runs production server
- **Target**: Autoscale deployment for stateless web application
- **Output**: Frontend assets in `dist/public`, backend bundle in `dist/index.js`

## Database Management
- **Migrations**: Run `npm run db:push` to sync schema changes to PostgreSQL
- **Schema**: Defined in `shared/schema.ts` with Drizzle ORM
- **Configuration**: `drizzle.config.ts` uses DATABASE_URL environment variable

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite for build tooling
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Routing**: Wouter for client-side navigation
- **State Management**: TanStack React Query for server state management with forms handled by React Hook Form
- **Styling**: Tailwind CSS with custom CSS variables for theming and Inter font family
- **Form Validation**: Zod schemas for type-safe validation with React Hook Form integration

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with JSON communication
- **File Uploads**: Multer middleware for handling emergency report photos (5MB limit, images only)
- **Error Handling**: Centralized error middleware with structured error responses
- **Development**: Vite middleware integration for hot reloading in development

## Data Storage Solutions
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless database provider
- **Schema Management**: Drizzle migrations with shared schema definitions
- **Storage Strategy**: In-memory storage implementation for development with interface for database transition
- **File Storage**: Local filesystem storage for uploaded images with UUID-based naming

## Authentication and Authorization
- **Current State**: No authentication system implemented (public emergency service)
- **Session Management**: Express sessions configured with connect-pg-simple for PostgreSQL session storage
- **Security**: Basic input validation and file upload restrictions

## Key Features and Design Patterns
- **Emergency Response System**: Form-based emergency reporting with photo upload capability
- **Partner Application System**: Multi-step form for tradespeople to join the network
- **Responsive Design**: Mobile-first approach with emergency banner and sticky header
- **Multi-language Support**: German (Austrian) content with proper locale settings
- **SEO Optimization**: Structured meta tags, Open Graph, and semantic HTML
- **Performance**: Optimized builds with code splitting and asset optimization

## Component Architecture
- **Layout System**: Centralized layout component with header, footer, and modal management
- **Modal System**: Reusable modal components for emergency reporting and partner applications
- **UI Components**: Comprehensive design system with consistent styling and behavior
- **Form Components**: Integrated form components with validation and error handling
- **Page Structure**: Route-based page components with shared layout patterns

# External Dependencies

## Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form, TanStack React Query
- **Build Tools**: Vite with TypeScript support, esbuild for production builds
- **UI Framework**: Radix UI components, Tailwind CSS, class-variance-authority for component variants

## Backend Dependencies
- **Server Framework**: Express.js with TypeScript support via tsx
- **Database**: Drizzle ORM, Neon serverless PostgreSQL, connect-pg-simple for sessions
- **File Handling**: Multer for multipart form uploads
- **Validation**: Zod for schema validation, drizzle-zod for database schema integration

## Development and Replit Integration
- **Replit Plugins**: Vite plugins for runtime error overlay, cartographer, and dev banner
- **Development Tools**: TypeScript compiler, PostCSS with autoprefixer
- **Font Integration**: Google Fonts (Inter) with preconnect optimization

## Utility Libraries
- **Styling**: clsx and tailwind-merge for conditional styling
- **Date Handling**: date-fns for date manipulation
- **Icons**: Lucide React for consistent iconography
- **Command Interface**: cmdk for search and command functionality
- **Navigation**: Wouter for lightweight client-side routing

## Database Configuration
- **Database URL**: Environment variable driven configuration
- **Migration System**: Drizzle Kit for schema migrations to PostgreSQL
- **Schema Location**: Shared schema definitions in `shared/schema.ts`
- **Dialect**: PostgreSQL with UUID generation and timestamp defaults