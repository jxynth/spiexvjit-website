# Deployment Guide for SPIEXVJIT Club Website

This guide covers deploying the SPIEXVJIT Club website to Vercel with automated CI/CD.

## Prerequisites

1.  **Install Node.js**: Download and install from [nodejs.org](https://nodejs.org/). This will give you `npm`.
2.  **Install Git**: Download and install from [git-scm.com](https://git-scm.com/).
3.  **GitHub Account**: Required for version control and CI/CD.
4.  **Vercel Account**: Sign up at [Vercel.com](https://vercel.com) (can use GitHub login).

## Quick Start (Automated Deployment)

The repository is configured with GitHub Actions for continuous integration. Every push to the `main` branch will:
- Run linting checks
- Build the project
- Verify build artifacts

### Deploy to Vercel

**Option 1: Vercel GitHub Integration (Recommended)**

1.  Go to [Vercel.com](https://vercel.com) and sign up/login.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select **"Continue with GitHub"**.
4.  Find your `spiexvjit-website` repository and click **"Import"**.
5.  Vercel will auto-detect the Next.js framework and configure settings using `vercel.json`:
    -   Framework Preset: **Next.js** (auto-detected)
    -   Root Directory: `./` (default)
    -   Build Command: `npm run build` (from vercel.json)
    -   Output Directory: `.next` (from vercel.json)
    -   Install Command: `npm install` (from vercel.json)
6.  Click **"Deploy"**.

**Option 2: Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Manual Deployment Steps

If you need to set up the repository from scratch:

### Step 1: Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit of SPIEXVJIT Club website"
```

### Step 2: Push to GitHub

1.  Go to [GitHub.com](https://github.com) and create a new repository.
2.  Copy the URL of your new repository.
3.  Link your local files to GitHub:

```bash
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

### Step 3: Configure Vercel

The repository includes a `vercel.json` configuration file that automatically sets up deployment settings. Vercel will use these settings when you import the project.

## CI/CD Pipeline

The project includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs on every push to `main` and all pull requests:

- **Linting**: Ensures code quality standards
- **Build**: Compiles the Next.js application
- **Verification**: Checks that build artifacts are created

## Local Development

Before deploying, test locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start
```

## Environment Variables

If you need to add environment variables:

1.  In Vercel dashboard, go to your project settings
2.  Navigate to **Environment Variables**
3.  Add your variables for production, preview, and development environments

## Troubleshooting

-   **"Command not found"**: If you just installed Node.js or Git, restart your terminal.
-   **Build Errors**: Check the "Logs" tab in Vercel or GitHub Actions. Common issues:
    -   Missing dependencies: Run `npm install`
    -   Type errors: Check TypeScript files
    -   Font loading: Google Fonts loads at runtime (not during build), so end users need internet access
-   **CI/CD Failures**: Check the GitHub Actions tab in your repository for detailed logs.

## Deployment Checklist

- [ ] All dependencies installed (`npm install`)
- [ ] Project builds successfully (`npm run build`)
- [ ] Linting passes (`npm run lint`)
- [ ] GitHub repository is up to date
- [ ] Vercel project is connected to GitHub repository
- [ ] Environment variables configured (if needed)
- [ ] Custom domain configured (optional)

## Success!

Once deployed, Vercel will provide:
- **Production URL**: `your-project.vercel.app`
- **Preview URLs**: Automatic deployments for every branch/PR
- **Analytics**: Traffic and performance metrics

Every push to `main` will automatically trigger a new deployment!
