# Deployment Guide for SPIEXVJIT Club Website

Since `git` and `npm` are not currently available in your terminal, here is the manual step-by-step guide to deploying your website to Vercel.

## Prerequisites

1.  **Install Node.js**: Download and install from [nodejs.org](https://nodejs.org/). This will give you `npm`.
2.  **Install Git**: Download and install from [git-scm.com](https://git-scm.com/).

## Step 1: Initialize Git Repository

Once Git is installed, open your terminal (PowerShell or Command Prompt) in the project folder:
`C:\Users\JAYANTH SIA\.gemini\antigravity\scratch\spiexvjit-website`

Run these commands:

```bash
git init
git add .
git commit -m "Initial commit of SPIEXVJIT Club website"
```

## Step 2: Push to GitHub

1.  Go to [GitHub.com](https://github.com) and create a new repository (e.g., `spiexvjit-club-website`).
2.  Copy the URL of your new repository.
3.  Back in your terminal, link your local files to GitHub:

```bash
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```
*(Replace `<YOUR_GITHUB_REPO_URL>` with the actual URL you copied)*

## Step 3: Deploy to Vercel

1.  Go to [Vercel.com](https://vercel.com) and sign up/login.
2.  Click **"Add New..."** -> **"Project"**.
3.  Select **"Continue with GitHub"**.
4.  Find your `spiexvjit-club-website` repository and click **"Import"**.
5.  **Configure Project**:
    -   Framework Preset: **Next.js** (should be auto-detected)
    -   Root Directory: `./` (leave default)
    -   Build Command: `npm run build` (default)
    -   Output Directory: `.next` (default)
    -   Install Command: `npm install` (default)
6.  Click **"Deploy"**.

## Troubleshooting

-   **"Command not found"**: If you just installed Node.js or Git, restart your terminal or computer for the changes to take effect.
-   **Build Errors**: If Vercel fails to build, check the "Logs" tab in Vercel. Common issues might be missing dependencies defined in `package.json` (which we have verified is correct).

## Success!

Once deployed, Vercel will give you a live URL (e.g., `spiexvjit-club-website.vercel.app`) that you can share with everyone!
