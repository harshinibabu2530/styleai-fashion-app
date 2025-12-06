# StyleAI - Fashion Recommendation App

## Overview

StyleAI is an AI-powered fashion recommendation application that helps users discover personalized outfit combinations from their wardrobe. Users can upload photos of their clothing items (tops and bottoms), receive AI-generated outfit recommendations, explore trending fashion inspiration, and set style preferences. The app features a visual-first interface inspired by Pinterest's discovery model and ASOS's fashion commerce approach, with an approachable AI assistant to guide users through their style journey.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server with HMR support
- **Client-side routing** managed through tab-based state (no traditional router, single-page architecture)

**UI Component Library**
- **shadcn/ui** components built on Radix UI primitives (New York style variant)
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component architecture follows atomic design with reusable UI primitives in `client/src/components/ui/`

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Local React state (`useState`) for UI interactions and navigation
- Custom query client configuration in `client/src/lib/queryClient.ts` with automatic error handling

**Design System**
- **Typography**: Inter (UI), Playfair Display (headings/display)
- **Color System**: HSL-based with CSS variables for light/dark theme support
- **Spacing**: Tailwind's spacing scale (units of 3, 4, 6, 8, 12, 16)
- Custom elevation system with hover and active states for interactive elements

### Backend Architecture

**Server Framework**
- **Express.js** HTTP server with TypeScript
- Custom request logging middleware tracking response times and status codes
- Static file serving for production builds from `dist/public`
- API routes prefixed with `/api` (registered in `server/routes.ts`)

**Development Environment**
- **Vite middleware mode** for development with HMR over WebSocket
- Custom Vite integration in `server/vite.ts` with dynamic template reloading
- Replit-specific plugins for error overlays and development banners

**Build Process**
- **esbuild** for server-side bundling with selective dependency bundling (allowlist approach)
- **Vite** for client-side bundling with code splitting
- Two-stage build: client build → server bundle → unified `dist/` output

### Data Storage Solutions

**Database**
- **PostgreSQL** as the primary database (configured via `DATABASE_URL` environment variable)
- **Drizzle ORM** for type-safe database operations and schema management
- Schema definition in `shared/schema.ts` with Zod validation schemas

**Current Schema**
- `users` table: id (UUID), username (unique), password
- Extensible schema design ready for clothing items, outfits, and user preferences

**Development Storage**
- In-memory storage implementation (`MemStorage` class) for development/testing
- Interface-based storage pattern (`IStorage`) for easy swap between implementations

**Session Management**
- Configured for `connect-pg-simple` session store (PostgreSQL-backed sessions)
- Express session middleware prepared but not yet fully implemented

### Authentication & Authorization

**Strategy**
- Prepared for **Passport.js** with local strategy (username/password)
- Session-based authentication using express-session
- Password hashing ready (dependencies include for bcrypt-style implementations)

**Current State**
- UI components built for login/signup flows (`AuthPages.tsx`)
- Backend authentication routes not yet implemented
- In-app authentication state managed via local React state (mock implementation)

### External Dependencies

**AI & Machine Learning**
- **Google Generative AI SDK** (@google/generative-ai) - for outfit recommendations and style analysis
- **OpenAI SDK** (openai) - alternative AI provider option
- Placeholder comments throughout codebase indicate AI features to be integrated

**File Upload & Processing**
- **Multer** - multipart/form-data handling for image uploads
- **react-dropzone** - drag-and-drop file upload UI component
- Image processing and analysis planned but not yet implemented

**Third-Party Services (Prepared)**
- **Stripe** - payment processing integration ready
- **Nodemailer** - email service for notifications
- **Axios** - HTTP client for external API calls

**UI & UX Libraries**
- **Radix UI** primitives (20+ components) - accessible, unstyled UI components
- **Embla Carousel** - carousel/slider functionality
- **Lucide React** - icon library
- **React Icons** - additional social media icons (Google, Apple, GitHub)
- **cmdk** - command palette component
- **react-day-picker** - calendar/date selection

**Utilities**
- **uuid** / **nanoid** - unique ID generation
- **date-fns** - date manipulation and formatting
- **zod** - runtime type validation
- **class-variance-authority** - component variant styling
- **tailwind-merge** / **clsx** - className utilities

**Development Tools**
- **Replit-specific plugins** - cartographer, dev banner, error modal
- **TypeScript** with strict mode enabled
- Path aliases configured (`@/`, `@shared/`, `@assets/`)

### Notable Architectural Decisions

**Monorepo Structure**
- Shared types and schemas in `shared/` directory accessible to both client and server
- Unified TypeScript configuration with path aliases
- Single package.json for simplified dependency management

**Mock Data Pattern**
- Extensive use of mock data with "todo: remove mock functionality" comments
- Enables rapid UI development before backend implementation
- Examples: outfit recommendations, Pinterest-style pins, style preferences

**Image Asset Strategy**
- Static assets stored in `attached_assets/generated_images/`
- Vite alias `@assets` for clean import paths
- Placeholder Unsplash images used throughout for demonstration

**Component Organization**
- Page-level components: `HeroSection`, `UploadPage`, `OutfitsPage`, `PreferencesPage`, `PinterestInspiration`
- Feature components: `ClothingCard`, `OutfitCard`, `PreferenceCard`, `ChatWidget`
- Example components in `client/src/components/examples/` for testing individual components
- Reusable UI primitives in `client/src/components/ui/`

**Navigation Pattern**
- Tab-based navigation without traditional routing
- State-driven UI rendering (`activeTab` state controls visible page)
- Authentication gates control access to features

**Error Handling**
- Custom error boundary overlay in development (Replit plugin)
- Query client configured to throw on 401 or return null based on context
- Express middleware for request/response logging