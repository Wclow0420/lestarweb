# Lestar - AI-Driven Data Management Platform

## Overview

Lestar is a comprehensive AI-driven centralized data repository platform designed to transform how organizations manage, process, and analyze their data. The platform specializes in two main products: Lestar ESG (Environmental, Social, and Governance data management) and Lestar CEO360 (financial data consolidation and analytics). The system provides intelligent data cleaning, transformation, real-time dashboards, and AI-powered insights to help businesses reduce reporting time from days to minutes.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui components
- **State Management**: React Query (TanStack Query) for server state
- **Animations**: Framer Motion for interactive animations
- **Build Tool**: Vite with custom configuration for Replit environment

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Architecture**: RESTful API design
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Component Architecture
- **Design System**: Custom Lestar brand colors with CSS variables
- **Interactive Components**: Data visualization charts, AI chatbot interface, interactive data tables
- **Responsive Design**: Mobile-first approach with breakpoint-based responsiveness
- **Accessibility**: ARIA-compliant components from Radix UI

## Key Components

### Data Processing Pipeline
1. **Data Sources Integration**: Support for Excel files, databases, and web APIs
2. **Data Lake Storage**: Integration with Azure, MongoDB, Iceberg, Amazon S3, and Google Cloud
3. **Data Warehouse**: Support for AWS, Snowflake, Oracle, and IBM platforms
4. **AI Processing**: Intelligent data cleaning, transformation, and analysis

### User Interface Components
- **Interactive Data Flow Visualization**: Shows data journey from sources to insights
- **AI Chatbot**: Generative AI interface for natural language data queries
- **Real-time Dashboards**: ESG and financial metrics visualization
- **Interactive Data Tables**: Sortable, filterable data presentation with export capabilities

### Core Features
- **ESG Management**: Comprehensive ESG data collection, analysis, and reporting
- **Financial Analytics**: CEO360 dashboard for financial performance monitoring
- **Predictive Analytics**: AI-driven forecasting and anomaly detection
- **Multi-entity Support**: Scalable architecture for enterprise organizations

## Data Flow

1. **Data Ingestion**: Multiple data sources (Excel, databases, APIs) connect to the platform
2. **Data Processing**: AI-driven cleaning and transformation in the data lake
3. **Data Storage**: Processed data stored in selected data warehouse solutions
4. **Analytics Engine**: AI algorithms analyze data for patterns, anomalies, and insights
5. **Visualization**: Real-time dashboards and interactive components present insights
6. **User Interaction**: AI chatbot and interactive interfaces enable natural data exploration

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connectivity
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Data fetching and caching
- **framer-motion**: Animation library for interactive components
- **recharts**: Data visualization and charting library

### UI/UX Dependencies
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **react-hook-form**: Form state management
- **date-fns**: Date manipulation utilities

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution for Node.js
- **esbuild**: JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- **Development Server**: Vite dev server with HMR (Hot Module Replacement)
- **Backend Server**: Express.js with tsx for TypeScript execution
- **Database**: Neon Database with environment-based configuration
- **Build Process**: Concurrent frontend (Vite) and backend (esbuild) builds

### Production Deployment
- **Frontend**: Static build output served from Express.js
- **Backend**: Bundled Node.js application with external packages
- **Database**: Production PostgreSQL instance via DATABASE_URL environment variable
- **Environment**: Replit-optimized with custom middleware and error handling

### Database Management
- **Schema Management**: Drizzle Kit for migrations and schema changes
- **Connection**: Serverless-first approach with Neon Database
- **Session Storage**: PostgreSQL-backed sessions for user state

## Changelog

```
Changelog:
- July 01, 2025. Initial setup
- July 01, 2025. Enhanced interactive features:
  * Added 3D computer screen effect for hero data journey
  * Implemented clickable architecture stages with animated transitions
  * Enhanced AI chatbot with keyword-based responses (report, graph, pie, bar)
  * Added interactive visualizations in chatbot (tables, charts)
  * Improved user experience with Apple-inspired design elements
```

## Recent Changes

### MacBook Design & Multi-Page Enhancement (July 01, 2025)
- **Realistic MacBook Design**: Transformed 3D computer into authentic MacBook with:
  - macOS menu bar with traffic light controls
  - Apple logo on screen back
  - Keyboard and trackpad details
  - Proper 3D perspective and transforms
- **Optimized Architecture Layout**: Compressed data architecture section to fit all 3 stages and details on one screen
- **Multi-Page Navigation**: Created comprehensive navigation system with three distinct pages:
  - **Home**: Current landing page with hero, data flow, and architecture
  - **Lestar ESG**: Dedicated ESG page with environmental, social, governance metrics and interactive charts
  - **Lestar CEO360**: Executive dashboard with KPI tracking, department performance, and financial analytics
- **Enhanced Navigation**: Updated navigation component with active state indicators and mobile-responsive design
- **Interactive Features on All Pages**: Each page includes interactive graphs, data tables, and AI chatbot functionality

### Interactive Enhancements (July 01, 2025)
- **Smart AI Chatbot**: Enhanced with keyword detection that generates specific visualizations:
  - "report" keyword → Interactive data table
  - "graph" or "line" keywords → Line chart
  - "pie" keyword → Pie chart with legend
  - "bar" keyword → Bar chart comparison
- **Quick Action Buttons**: Added suggestion buttons for common chatbot requests
- **Generate Report Feature**: Stage 3 includes an AI report generation simulation with loading animations

## User Preferences

```
Preferred communication style: Simple, everyday language.
Design preference: Apple-inspired clean minimal design with interactive elements.
Interactive requirements: 3D computer screen, clickable architecture stages, keyword-responsive AI chatbot.
```