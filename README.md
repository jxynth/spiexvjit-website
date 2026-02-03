# SPIEXVJIT Club Website

Official website for St. Peter's Institute of Engineering EXVJIT Club.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## Features

-   **Modern Tech Stack:** Next.js 14, TypeScript, Tailwind CSS
-   **Animations:** Framer Motion for smooth transitions
-   **Theming:** Dark/Light mode support with `next-themes`
-   **UI:** Custom components with Shadcn UI-inspired design system

## Project Structure

-   `src/app`: App Router pages and layouts
-   `src/components`: Reusable UI components and page sections
-   `src/lib`: Utility functions
-   `src/styles`: Global styles and Tailwind configuration

## Deployment

This project is configured for automated deployment to Vercel with GitHub Actions CI/CD.

### Quick Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and use settings from `vercel.json`
3. Every push to `main` triggers automatic deployment

For detailed deployment instructions, see [DEPLOY.md](./DEPLOY.md).

### CI/CD Pipeline

The repository includes automated checks on every push:
- Code linting
- Production build verification
- Build artifact validation

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
