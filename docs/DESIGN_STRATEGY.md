# PRO EVENT SOLUTIONS — DESIGN & UI/UX STRATEGY
## Concept C: The Modern Luxury Event & Creative Production Powerhouse

---

## 1. Visual Identity & Brand Philosophy

Pro Event Solutions represents the pinnacle of high-stakes event execution in Lahore. The design aesthetic balances **regal warmth (Imperial Gold)** with **corporate authority (Deep Midnight Onyx)** and **high-clarity modern typography**.

### Core Design Pillars:
1. **Commanding & Architectural:** Bold, modern typography inspired by luxury agencies and high-end architectural studios.
2. **Visual Proof First:** Immediate showcase of real, authentic Pakistani events—majestic stage trussing, glowing wedding floral sets, and Expo Centre booths.
3. **Frictionless Conversion:** High-visibility, context-aware WhatsApp triggers and an intuitive interactive quote builder.
4. **Mobile Perfection:** Flawless touch ergonomics, collapsible accordions, sticky mobile drawer, and zero horizontal scrolling.

---

## 2. Design Tokens & Styling Guide

### 2.1 Color Tokens
```css
:root {
  /* Surface Colors */
  --bg-primary: #0B0F19;         /* Deep Onyx Black */
  --bg-card: #131B2E;            /* Midnight Navy Slate */
  --bg-elevated: #1A243B;        /* Elevated Card Hover */
  --bg-subtle: #0F172A;          /* Section Alternate */
  
  /* Accent & Luxury Gold */
  --gold-primary: #D4A017;       /* Imperial Gold */
  --gold-light: #F3C043;         /* Champagne Gold */
  --gold-dark: #A67C11;          /* Burnished Antique Gold */
  --gold-gradient: linear-gradient(135deg, #F3C043 0%, #D4A017 50%, #B8860B 100%);
  
  /* Text & Contrast */
  --text-primary: #FFFFFF;       /* Pure Crisp White */
  --text-muted: #94A3B8;         /* Platinum Secondary */
  --text-dim: #64748B;           /* Disabled / Muted Meta */
  
  /* Borders */
  --border-subtle: #1E293B;       /* Card Edge */
  --border-gold: rgba(212, 160, 23, 0.35); /* Accent Border */
  
  /* Conversion Action */
  --whatsapp-color: #25D366;     /* WhatsApp Green */
  --whatsapp-hover: #1EBE5D;     /* WhatsApp Green Hover */
  --whatsapp-dark: #128C7E;      /* Secondary Dark */
  
  /* Shadows & Glows */
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 14px rgba(0, 0, 0, 0.5);
  --shadow-gold: 0 0 20px rgba(212, 160, 23, 0.25);
  
  /* Border Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 9999px;
}
```

### 2.2 Typography System
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  line-height: 1.65;
  color: var(--text-muted);
  background-color: var(--bg-primary);
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.25;
  letter-spacing: -0.015em;
}

.text-gold {
  color: var(--gold-light);
}

.text-gradient {
  background: var(--gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## 3. Key Component Blueprints (Adapted from `imEvent`)

### 3.1 The Flagship Hero Section
- **Visual Backdrop:** High-res WebP hero image with dark radial gradient overlay (`rgba(11, 15, 25, 0.75)` to `rgba(11, 15, 25, 0.95)`).
- **Badge:** Glowing gold pill: `★ Lahore's Leading Event Management & Production Agency`.
- **Headline:** `Crafting Extraordinary Events Across Lahore` with gold gradient on `Extraordinary Events`.
- **Supporting Lead:** `From enterprise corporate summits & Expo Centre trade shows to royal weddings in DHA & Gulberg — planned, engineered & executed under one roof.`
- **Dual CTAs:**
  - `Request an Itemized Quote` (Action Gold button opens quote generator).
  - `Chat on WhatsApp (+92 307 4647635)` (Direct WhatsApp button).

### 3.2 Quick Event Inquiry Selector Ribbon
- Horizontal floating bar below hero with:
  1. *Event Category Dropdown* (Corporate, Wedding, Expo Centre, Private Party, Studio Build).
  2. *Estimated Date Field*.
  3. *Preferred Area Dropdown* (DHA, Gulberg, Johar Town / Expo, Bahria Town, Cantt, Other).
  4. *Instant WhatsApp Brief Button* (automatically constructs a WhatsApp chat with those selections).

### 3.3 The 4-Pillar Service Grid
- 4 luxury cards with hover rise effect:
  - **1. Corporate Events & Summits:** Annual Galas, Conferences, AGMs, AV & Staging.
  - **2. Luxury Weddings & Celebrations:** Mehndi, Barat, Walima, Floral Architecture & 3D Stage Builds.
  - **3. Expo Centre Lahore Services:** Custom 3D Booth Fabrication, Stall Management & Audio-Visuals.
  - **4. Creative Production & Studios:** Concert Staging, Lighting Grids, Podcast & TV Studios.

### 3.4 Interactive Delivery Process Tabs
- Tabbed component:
  - **Step 1: Consultation & WhatsApp Brief**
  - **Step 2: 3D Stage Concept & Spatial Blueprint**
  - **Step 3: Line-Item Costing & Scope Sign-off**
  - **Step 4: Turnkey On-Site Production & Direction**

### 3.5 Isotope-Style Filterable Portfolio
- Category filter buttons: `[All] [Corporate Summits] [Weddings & Decor] [Expo Centre Stalls] [Technical Staging]`.
- Responsive grid showcasing PES's 35 curated high-res WebP images with caption overlays.

### 3.6 Lahore Venues & Coverage Showcase
- Visual cards showcasing PES's regular execution venues in Lahore:
  - **Expo Centre Lahore (Johar Town)**
  - **Royal Palm Golf & Country Club**
  - **Pearl Continental & Nishat Hotels**
  - **DHA & Gulberg Luxury Marquees**

### 3.7 Interactive Request-A-Quote Module
- Clean multi-input card:
  - Name, Phone/WhatsApp, Event Type, Date, Venue/Location, Estimated Guests, Message.
  - "Generate Instant WhatsApp Quote" button that builds the formatted WhatsApp message:
    `Hello Pro Event Solutions! Name: [X], Event: [Y], Date: [Z], Venue: [W]...`

### 3.8 Sticky Mobile Conversion Footer
- Compact bottom bar fixed on mobile screens (< 768px):
  - Left: `Call / WhatsApp Hotline: +92 307 4647635`
  - Right: High-contrast green button: `WhatsApp Quote`
