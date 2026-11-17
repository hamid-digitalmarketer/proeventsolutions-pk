# Pro Event Solutions — cPanel Production Deployment Guide

## Website Details
- **Brand:** Pro Event Solutions
- **Domain:** https://proeventsolutions.pk/
- **WhatsApp Direct:** +92 307 4647635 (https://wa.me/923074647635)
- **Google Tag Manager Container:** GTM-PPNT33QP
- **Total Preserved URLs:** 79 URLs (100% complete)
- **Architecture:** Pure Static HTML5 / Modern CSS3 / Vanilla JS / WebP Images / Apache .htaccess

---

## Deployment Steps on cPanel Shared Hosting

### Step 1: Backup Existing Website
1. Log into your **cPanel** dashboard.
2. Go to **File Manager** -> navigate to `public_html`.
3. Select all existing files, click **Compress** (create `backup_previous_website.zip`), and download it to your local computer.

### Step 2: Upload the Production ZIP
1. In the `D:\pro event\` folder, locate:
   `ProEventSolutions_Static_Website_Production.zip`
2. In cPanel File Manager, click **Upload** inside `public_html`.
3. Upload `ProEventSolutions_Static_Website_Production.zip`.

### Step 3: Extract the Archive
1. Once upload reaches 100%, right click `ProEventSolutions_Static_Website_Production.zip` in cPanel File Manager.
2. Click **Extract** directly into `public_html`.
3. Ensure `.htaccess`, `index.html`, `sitemap.xml`, `robots.txt`, `404.html`, and `assets/` are directly inside `public_html`.

### Step 4: Verify Live Website
1. Visit https://proeventsolutions.pk/ in an incognito window.
2. Check that the homepage loads with high-speed dark luxury theme and gold accents.
3. Click any WhatsApp CTA button across desktop, mobile drawer, and floating button — verify it opens WhatsApp chat with prefilled message to `+923074647635`.
4. Open Chrome Developer Tools Console -> verify `dataLayer` events firing on button clicks.
5. Check random inner URLs (e.g. `/wedding-event-management-lahore/`, `/corporate-event-management-services-lahore/`, `/event-planner-in-dha-lahore/`).

---
Generated: 2026-11-17 08:48:52
