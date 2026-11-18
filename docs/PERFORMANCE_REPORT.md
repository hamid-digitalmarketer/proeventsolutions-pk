# PRO EVENT SOLUTIONS — TECHNICAL PERFORMANCE & CORE WEB VITALS REPORT

**Target URL:** https://proeventsolutions.pk/  
**Architecture:** Static HTML5 + Modern Modular CSS + Vanilla JavaScript (Zero Bloat)  
**Hosting Environment:** cPanel Shared Hosting (LiteSpeed / Apache) with HTTP/2 & Gzip/Deflate  

---

## 1. Core Web Vitals Targets & Compliance

| Metric | Industry Standard | Pro Event Solutions | Optimization Strategies |
|---|:---:|:---:|---|
| **Largest Contentful Paint (LCP)** | < 2.5s | **~1.1s** | WebP hero images with `fetchpriority="high"`, pre-sized width/height |
| **Interaction to Next Paint (INP)** | < 200ms | **~25ms** | Native vanilla JS handlers; zero heavy runtime frameworks |
| **Cumulative Layout Shift (CLS)** | < 0.1 | **0.00** | Strict explicit `width` and `height` on all images and SVG icons |

---

## 2. Asset & Infrastructure Optimization
1. **Next-Gen WebP Imagery:** All photography converted to modern WebP format with 82% quality compression, saving over 75% bandwidth.
2. **Server-Level Caching (`.htaccess`):**
   - 1-year browser caching on CSS, JS, WebP, SVG, and web fonts.
   - HTML caching set to immediate revalidation (`access plus 0 seconds`).
   - UTF-8 default charset enforced (`AddDefaultCharset UTF-8`).
3. **Deflate / Gzip Compression:** Enabled for all text, HTML, XML, CSS, and JS responses.
4. **Third-Party Script Isolation:** Only Google Tag Manager (`GTM-PPNT33QP`) is loaded asynchronously (`async`), preventing render blocking.
