# PRO EVENT SOLUTIONS — REDESIGN PROJECT MASTER PLAN
## Comprehensive Strategic Proposal & Technical Implementation Architecture

**Business:** Pro Event Solutions  
**Production Website:** https://proeventsolutions.pk/  
**Target Market:** Lahore, Punjab, Pakistan  
**Primary Conversion Channel:** WhatsApp (+92 307 4647635) & Interactive Quote Desk  
**Template Source:** `D:\pro event\themes\event-management-html-template-with-rtl-version-2023-11-27-05-23-32-utc\imevent-multipage`  
**GitHub Repository:** [hamid-digitalmarketer/proeventsolutions-pk](https://github.com/hamid-digitalmarketer/proeventsolutions-pk)  
**CI/CD Pipeline:** GitHub Actions -> cPanel Hosting (`/home2/proeven1/public_html`)  
**Date:** November 18, 2026  
**Document Version:** 1.0 (Master Proposal)

---

## 1. Executive Summary

Pro Event Solutions is a premier event management, creative production, and stage fabrication agency headquartered in Lahore, Pakistan. The business serves high-end corporate clients, exhibition organizers at Expo Centre Lahore, brand activation marketing managers, and luxury wedding / private celebration clients across Lahore’s prime localities (DHA Phases 1–9, Gulberg, Bahria Town, Model Town, Cantt, Johar Town, etc.).

This Master Plan establishes a complete roadmap to merge the visual energy, dynamic components, and interactive layouts of the **imEvent HTML5 Event Template** with the robust 79-page content architecture, verified local SEO, structured schema data, and lightning-fast static performance of the Pro Event Solutions web ecosystem.

The objective is to deliver a website that:
1. Establishes unchallenged market authority in Lahore and Pakistan.
2. Captures enterprise B2B corporate events, Expo Centre stalls, and luxury weddings.
3. Maximizes WhatsApp conversion velocity with instant quotations and interactive request forms.
4. Preserves 100% of existing URLs, canonical structures, schemas, and tracking tags (`GTM-PPNT33QP`).
5. Automates every code change through GitHub version control and GitHub Actions cPanel deployment.

---

## 2. Existing Website Audit (https://proeventsolutions.pk/)

### 2.1 Current Strengths
- **100% URL Preservation:** Exactly 79 live URLs returning HTTP 200 with zero crawl errors or orphan pages.
- **Deep Content Grounding:** Rich, authentic data extracted from the SQLite crawl database covering 1,001 headings, 2,951 content blocks, 277 FAQs, and localized venue details.
- **Strict Canonical & Redirection Rules:** Apache `.htaccess` enforcing HTTPS and canonical trailing slashes with 301 redirects.
- **Structured Data:** Full JSON-LD coverage (`LocalBusiness` with `#business` entity, `Service` on 74 pages, `BreadcrumbList`, and `FAQPage`).
- **GTM & Conversion Tracking:** `GTM-PPNT33QP` injected across all pages with click dataLayer tracking on CTAs.
- **Clean Typography:** Zero UTF-8 mojibake errors (1,158 instances repaired).

### 2.2 Areas Identified for Redesign & Elevation
- **Visual Polish & Hero Dynamics:** Current layout is functional and clean, but can be significantly elevated using imEvent's dynamic event slider, countdown badges, and immersive multi-layer cards.
- **Component Sophistication:** The template offers interactive agenda timelines, speaker/team cards, venue carousels, isotope filterable portfolio galleries, and partner logo ribbons that can showcase PES's large portfolio.
- **Interactive Quotation System:** In addition to direct WhatsApp links, adding an interactive multi-step quote calculator / event brief builder directly connected to WhatsApp pre-fills will boost lead capture for corporate and wedding clients.
- **Visual Proof & Case Studies:** More prominent placement of authentic project photos (stall builds at Expo Centre, trussing & sound rigs, wedding stages) using filterable tabs.

---

## 3. HTML Template Analysis (`imEvent Multipage`)

### 3.1 Overview of the Template
The `imEvent` template is an enterprise-grade HTML5/CSS3/JavaScript template designed specifically for conferences, expos, corporate summits, festivals, and event management agencies.

### 3.2 Technical Stack of Template
- **Framework:** Bootstrap 3.3.6 responsive grid system.
- **Icons:** FontAwesome 4.5+ & Glyphicons.
- **Carousels & Sliders:** OwlCarousel2 with touch-swipe support.
- **Filterable Gallery:** Isotope v2.2.2 with filtering animations.
- **Lightbox:** PrettyPhoto modal image & video previewer.
- **Typography:** Google Fonts (Raleway, Montserrat, Open Sans).
- **Forms & Validation:** PHP Mailer scripts with jQuery validation.
- **RTL Capabilities:** Full Right-To-Left layout mirror (`imevent-multipage-rtl`).

### 3.3 Component Evaluation Matrix

| Component Name | Source Template File | Suitability for Pro Event Solutions | Customization Required | Implementation Decision |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Background Slider** | `index.html` (Section 0) | **High** — dynamic background images with date badge, headline, and dual CTAs. | Modernize overlay to Gold/Navy palette, replace conference countdown with "Next Booking Window" or "Lahore Event Season 2026". | **Adopt & Modernize** |
| **Featured Callout Ribbon** | `index.html` (Section 1) | **High** — high-visibility bar for urgent inquiries and season highlights. | Retheme with WhatsApp direct quick-chat button and Lahore hotline. | **Adopt** |
| **Service Highlight Cards** | `index.html` (Section 3) | **High** — clean 4-column cards with icons and hover effects. | Map to Corporate, Weddings, Expo Centre, Creative Production. | **Adopt** |
| **Event Schedule / Timeline Tabs** | `index.html` (Section 2) | **Medium-High** — tabbed navigation. | Adapt into "Our Event Planning Process" (Step 1: Brief, Step 2: 3D Concept, Step 3: Line-Item Quote, Step 4: Live Execution). | **Redesign into Process Tabs** |
| **Filterable Gallery (Isotope)** | `gallery-col-3.html` | **Critical** — filter portfolio by Corporate, Weddings, Expo Centre, Studios, Private Parties. | Connect to PES's 35 curated WebP photos. | **Adopt & Integrate** |
| **Partner / Client Carousel** | `index.html` (Section 8) | **High** — logo showcase for corporate clients, exhibition partners, and venue brands. | Use monochrome-to-gold hover effect. | **Adopt** |
| **Testimonials Slider** | `index.html` (Section 5) | **High** — client reviews slider with quote mark, star rating, and client details. | Populate with authentic Lahore client feedback from SQLite data. | **Adopt** |
| **Venues / Hotels Showcase** | `index.html` (Section 4) | **High** — showcase premier Lahore venues (Expo Centre, PC, Royal Palm, DHA Marquees). | Adapt into "Supported Lahore Venues & Locations". | **Adopt** |
| **Interactive Contact Form** | `contact-us.html` | **High** — structured form fields for Name, Phone, Event Type, Date, Venue, Budget. | Add instant WhatsApp submission dispatch + secure validation. | **Adopt & Enhance** |
| **Mobile Navigation Drawer** | `index.html` / `assets/js` | **Critical** — off-canvas mobile navigation menu. | Optimize for touch, add sticky WhatsApp conversion footer bar. | **Adopt & Harden** |

---

## 4. Best Homepage & Inner-Page Layout Selection

### 4.1 Selected Homepage Base: Hybrid of `index.html` & `index-2.html`
- **Hero:** Use `index.html`'s dynamic hero slider combined with `index-2.html`'s interactive quick inquiry/event selector ribbon.
- **Value Proposition Bar:** Real-time stats counter: 500+ Events Delivered, 100% On-Time Execution, 49 Lahore Localities Covered, 3D Design Approval Guarantee.
- **Service Silo Grid:** 4 primary pillars (Corporate & Summits, Luxury Weddings, Expo Centre Lahore, Creative Staging & AV).
- **Process Timeline:** Tabbed step-by-step methodology building trust with corporate procurement and families.
- **Filterable Visual Portfolio:** Isotope grid with high-resolution WebP images.
- **Client Testimonials & Venue Partners:** High-trust social proof.
- **Interactive Multi-Field Quotation Section:** Instant estimate request with WhatsApp routing.

### 4.2 Selected Inner-Page Layout: Enhanced `event-single.html` Architecture
- **Hero Header:** Sleek breadcrumb banner with background image, category badge, and single H1.
- **AI Quick Overview Block:** Factual definition, inclusions, and key turnaround parameters for search engine snippets and LLM citations.
- **Main Content Body:** Clear semantic typography, H2/H3 hierarchy, feature check-lists, and venue logistics.
- **Visual Proof Mini-Gallery:** Specific photos matching the service/location.
- **Process Workflow:** Turnaround timeline and line-item quotation guarantee.
- **Frequently Asked Questions (Accordion):** Interactive FAQ with Schema.org markup.
- **Cross-Linking Navigation Hub:** Contextual internal links connecting services to relevant Lahore areas and vice-versa.
- **Sticky / In-Page WhatsApp Conversion Module:** Action box with pre-filled message routing to +92 307 4647635.

---

## 5. Business Positioning & Market Strategy

### 5.1 Business Identity
**Pro Event Solutions (PES)** is Lahore's premier full-service turnkey event management and creative technical production company. Unlike standard decorator agencies or broker planners, PES owns and operates its own fabrication workshops, audio-visual inventory, LED wall panels, and lighting rigs, providing both design conceptualization and physical execution under one roof.

### 5.2 Target Customer Segments in Pakistan
1. **Corporate & B2B Enterprises:** Multinationals, telecom brands, banks, pharma firms, and tech startups requiring conferences, annual awards galas, and product launches at PC Lahore, Serena, Nishat, or Royal Palm.
2. **Exhibitors & Trade Show Organizers:** Domestic and international companies exhibiting at Expo Centre Lahore needing custom 3D stall design, booth fabrication, LED screens, and hostess/management staff.
3. **High-Net-Worth & Overseas Families:** Pakistani families in DHA, Gulberg, Bahria Town, and overseas Pakistanis demanding turnkey, stress-free luxury weddings (Mehndi, Barat, Walima) with 3D design approval before build.
4. **Media Houses & Creators:** Podcasts, YouTube channels, and television studios requiring professional acoustic treatment, cyclorama lighting, and custom set fabrication in Lahore.

---

## 6. Three Design Concepts Evaluation

### Concept A — "The Corporate Summit Agency"
- **Focus:** Ultra-minimalist, dark navy and silver, corporate-only tone.
- **Pros:** Appeals strongly to corporate procurement and MNC event managers.
- **Cons:** Alienates high-revenue wedding and private celebrations market which represents over 40% of Lahore's event industry.

### Concept B — "The Grand Royal Production"
- **Focus:** Opulent gold and emerald, heavy floral and wedding aesthetic.
- **Pros:** Highly engaging for luxury wedding clients.
- **Cons:** Undermines credibility for Expo Centre trade shows, corporate AGMs, and technical TV studio builds.

### Concept C — "The Modern Luxury Event & Creative Production Powerhouse" (RECOMMENDED)
- **Focus:** A balanced, sophisticated luxury design system featuring deep onyx (`#0B0F19`), brushed regal gold (`#D4A017` / `#F3C043`), crisp slate typography (`#F9FAFB`), and vibrant conversion green (`#25D366` for WhatsApp).
- **Why Concept C Wins:**
  - Naturally accommodates all four business pillars: Corporate, Weddings, Expo Centre, and Creative Production.
  - Matches the aesthetic standards of international event agencies (like Jack Morton or George P. Johnson) while remaining deeply grounded in Lahore's high-end market.
  - Delivers maximum conversion velocity with dedicated, persona-specific landing page messaging.

---

## 7. Proposed Design System: Palette & Typography

### 7.1 Color Palette
- **Primary Background:** `#0B0F19` (Deep Luxury Onyx)
- **Secondary Card Background:** `#131B2E` (Midnight Slate)
- **Border & Subtle Accents:** `#1E293B` (Refined Border Dark)
- **Primary Accent / Gold:** `#D4A017` (Imperial Gold)
- **Gold Hover / Highlight:** `#F3C043` (Champagne Gold)
- **Primary Text:** `#F9FAFB` (High Contrast Crisp White)
- **Muted / Secondary Text:** `#94A3B8` (Cool Platinum Gray)
- **Conversion CTA (WhatsApp):** `#25D366` / `#128C7E` (Official WhatsApp Green)
- **Interactive Action Gold:** `#EAB308` (Direct Quote Gold)

### 7.2 Typography
- **Headings (H1–H3):** `Montserrat`, `sans-serif` (Weights: 600, 700, 800) — commanding, architectural, and modern.
- **Subheadings & Accents:** `Raleway`, `sans-serif` (Weights: 500, 600) — elegant, open, and luxury-oriented.
- **Body Text:** `Inter` / `Open Sans`, `sans-serif` (Weights: 400, 500) — optimal legibility across mobile and desktop screens at 16px base size.

---

## 8. Complete Sitemap & Architecture (79 URLs)

The exact 79 URLs from `all urls.txt` are preserved with 100% fidelity:
- **Core Pages (3):** Homepage (`/`), About Us (`/about-us/`), Contact Us (`/contact/`)
- **Guides & Directories (2):** `/best-event-planner-lahore-pro-event-solutions/`, `/lahore-event-planning-directory/`
- **Core Services (10):**
  - `/wedding-event-management-lahore/`
  - `/corporate-event-management-services-lahore/`
  - `/brand-launch-event-management-lahore/`
  - `/catering-and-venue-management-services-in-lahore/`
  - `/creative-production-services-lahore/`
  - `/videography-services-lahore/`
  - `/photography-studio-design-lahore/`
  - `/podcast-set-design-installation-lahore/`
  - `/tv-channel-set-design-fabrication-lahore/`
  - `/private-parties-events-management-lahore/`
- **Expo Centre Lahore Services (15):**
  - `/event-management-company-for-expo-centre-lahore/`
  - `/expo-center-lahore-event-planners/`
  - `/expo-centre-lahore-brand-activation/`
  - `/expo-centre-lahore-conference-management/`
  - `/expo-centre-lahore-corporate-event-management/`
  - `/expo-centre-lahore-event-management-services/`
  - `/expo-centre-lahore-event-organizers/`
  - `/expo-centre-lahore-event-production/`
  - `/expo-centre-lahore-exhibition-management/`
  - `/expo-centre-lahore-exhibition-stall-design/`
  - `/expo-centre-lahore-exhibition-stall-management/`
  - `/expo-centre-lahore-product-launch-events/`
  - `/expo-centre-lahore-seminar-management/`
  - `/expo-centre-lahore-trade-show-management/`
  - `/lahore-expo-center-event-management-company/`
- **Lahore Neighborhood & Locality Landings (49):**
  - 49 specialized landing pages for DHA (all phases), Gulberg, Bahria Town, Johar Town, Model Town, Cantt, Askari, Faisal Town, Garden Town, Lake City, Wapda Town, Paragon City, Valencia, etc.

---

## 9. Conversion Rate Optimization (CRO) & Interactive Features

1. **Direct WhatsApp Integration:**
   - Every single page carries customized pre-filled inquiry text identifying the exact page title and service topic.
   - Sticky mobile bottom bar with instant WhatsApp trigger and telephone link (`+92 307 4647635`).
2. **Interactive Request-a-Quote Form:**
   - Multi-field inquiry modal/section capturing Event Type, Date, Guest Count, Venue Location, and Budget Range.
   - Dual submission: outputs directly to WhatsApp with pre-formatted brief so clients can send immediately without waiting for slow email replies.
3. **Trust & De-Risking Triggers:**
   - "3D Design Approval Before Build" promise.
   - "Itemized Line-Item Quote" guarantee (no hidden fees).
   - "Dedicated On-Site Event Director" on every project.

---

## 10. Technical Implementation Architecture

- **Architecture:** Fast, secure, maintainable static HTML5, modular CSS, and vanilla/lightweight JavaScript.
- **Framework Compatibility:** Clean CSS grid and flexbox modern styling inspired by imEvent component patterns, without heavy legacy jQuery dependencies that degrade Core Web Vitals.
- **Hosting & Server:** LiteSpeed Web Server on cPanel hosting (`proeventsolutions.pk`).
- **CDN & Security:** Cloudflare Reverse Proxy with SSL (Port 2083 UAPI management).
- **Deployment Automation:** GitHub repository (`hamid-digitalmarketer/proeventsolutions-pk`) with automated GitHub Actions CI/CD deploying directly to cPanel `/public_html` via encrypted credentials.

---

## 11. Development Milestones & Phased Execution

- **Milestone 1 (Foundations & Planning):** Complete template analysis, website audit, architecture proposal, and recovery protocols. *(Done)*
- **Milestone 2 (Component Adaptation):** Build modernized CSS and JS component library combining imEvent visual patterns with PES luxury gold design tokens.
- **Milestone 3 (Homepage Redesign):** Implement new flagship homepage with dynamic hero, quick inquiry bar, process tabs, isotope filterable portfolio, venue showcase, and interactive quote module.
- **Milestone 4 (Service & Expo Templates):** Upgrade the 25 core service and Expo Centre pages with enhanced hero banners, process cards, and AI-search definition boxes.
- **Milestone 5 (Location Pages Polish):** Upgrade the 49 Lahore location landing pages with unified component styling, local landmark maps, and neighborhood cross-links.
- **Milestone 6 (QA & Performance Optimization):** Core Web Vitals audit (LCP < 2.5s, CLS < 0.05), cross-browser and mobile responsive checks.
- **Milestone 7 (GitHub Push & CI/CD Verification):** Commit changes to GitHub, trigger automated GitHub Actions build, and verify 100% live status on cPanel.

---

## 12. Backup, Rollback & Emergency Protocols

- **Pre-Redesign Complete Backup:** Stored in `D:\pro event\seo_project_backup/` and git commit `073486d` / `8c247cd`.
- **Git Version Control Rollback:** Any regression can be rolled back in one command via `git revert` or `git checkout <commit_sha>`.
- **Power Failure Recovery Protocol:** All progress tracked step-by-step in `PROJECT_PROGRESS.md` and `TASK_CHECKLIST.md`.
