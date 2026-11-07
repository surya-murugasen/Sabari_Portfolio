# Sabari Venkatesh Daniel — Professional Portfolio

A modern, responsive personal portfolio website engineered specifically for **Sabari Venkatesh Daniel**, Programmer Analyst at Cognizant Technology Solutions.

> **Single Source of Truth:** All content, titles, company names, project descriptions, skills, certifications, and educational credentials have been mapped directly from Sabari's verified resume (`image resume.pdf`).

---

## 🎨 Design System & Palette

Crafted with an enterprise light/dark UI aesthetic inspired by modern enterprise cloud & workplace platforms:

* **Primary Deep Navy:** `#142D4E`
* **Azure Accent:** `#1687E8`
* **Cyan Secondary:** `#18B6C9`
* **Background Light:** `#F5F7FA`
* **Background Dark:** `#0B1120`
* **Card Surfaces:** Frosted Glass & Rounded Enterprise Cards (`rounded-2xl`)

---

## 🚀 Key Features

* **Strict Factuality:** 100% faithful to the resume; no fabricated metrics, fake clients, or unsupported titles.
* **Responsive Layouts:** Hand-crafted and tested for 375px (mobile), 768px (tablet), 1280px (laptop), and 1440px+ (desktop).
* **Enterprise Case Studies:**
  * **NYU Langone Health:** IT Core Patching Operations (Power BI Service, Power BI Desktop, SQL).
  * **Hays:** Windows 11 Transformation (Intune, SCCM, Active Directory, PowerShell, SQL).
* **Academic Engineering Projects:**
  * Facial Recognition-Based Attendance System (Android Kotlin, Java, MySQL, ML Kit).
  * Smart IoT-Based Blood Bank System (ESP8266, Arduino UNO, Java, MySQL).
* **Categorized Technical Matrix:** Device & Endpoint Management, Analytics & Reporting, Cloud Services, Programming, Automation, Database, Networking.
* **Credentials & Degrees:** Microsoft Azure AZ-900, AI-900, AB-900, Udemy courses, Wipro NASSCOM AI, Oracle Java, B.E. CSE (83% Distinction), and early-career internships.
* **Direct Downloadable Resume:** Links directly to the included PDF resume (`/resume.pdf`).
* **Interactive Communication:**
  * Verified direct phone & email links with single-click copy-to-clipboard buttons and toast feedback.
  * Direct modal contact form with pre-formatted email triggers.
  * Direct LinkedIn profile access.
* **Theme Switching:** Persistent Light/Dark theme toggle saved in `localStorage`.
* **Zero Backend Required:** 100% static, fast, secure, and ready for instant deployment.

---

## 🛠️ Technology Stack

* **Framework:** React 19 + TypeScript
* **Build Tool:** Vite 6
* **Styling:** Tailwind CSS v4
* **Icons:** Lucide React
* **Hosting Target:** Vercel, Netlify, Cloudflare Pages, or GitHub Pages

---

## 💻 Local Development Setup

### 1. Prerequisites
Ensure you have **Node.js 18+** installed:
```bash
node -v
npm -v
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 4. Create Production Build
```bash
npm run build
```
The optimized static build will be generated in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```
Visit `http://localhost:4173` to test the exact production output.

---

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended)
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import the repository. Vercel automatically detects Vite:
   * **Framework Preset:** Vite
   * **Build Command:** `npm run build`
   * **Output Directory:** `dist`
4. Click **Deploy**. Your site will be live with free automatic SSL/HTTPS in ~30 seconds.

### Option 2: Deploy to Netlify
1. Log in to [netlify.com](https://www.netlify.com/) and click **"Add new site" -> "Import an existing project"**.
2. Select your repository.
3. Configure build settings:
   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
4. Click **Deploy Site**.

### Option 3: Deploy to Cloudflare Pages
1. Log in to the Cloudflare dashboard and go to **Compute (Workers) > Workers & Pages**.
2. Click **Create Application > Pages > Connect to Git**.
3. Set the build framework to **Vite** with output directory **`dist`**.
4. Click **Save and Deploy**.

### Custom Domain & HTTPS Setup
1. In your hosting dashboard (Vercel, Netlify, or Cloudflare), open **Settings > Domains**.
2. Add your custom domain (e.g., `sabaridaniel.com` or `sabari.dev`).
3. Add the provided CNAME / A DNS records at your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.).
4. HTTPS is provisioned automatically via free Let's Encrypt certificates.

---

## 📝 Updating Portfolio Content

All resume data is cleanly separated from UI logic. To update contact information, add new certifications, or update projects:

1. Open [`src/data/portfolioData.ts`](file:///c:/Projects/Sabari/Sabari_Portfolio/src/data/portfolioData.ts).
2. Modify the relevant fields (e.g. `personal`, `enterpriseProjects`, `certifications`, `education`).
3. If replacing the PDF resume, overwrite [`public/resume.pdf`](file:///c:/Projects/Sabari/Sabari_Portfolio/public/resume.pdf) with the new file.
4. Run `npm run build` and re-deploy!

