# PRO EVENT SOLUTIONS — ADVANCED ANIMATIONS & INTERACTION SPECIFICATION

**Design Standard:** Modern Luxury Event & Creative Production Powerhouse  
**Philosophy:** Sophisticated, lightweight, non-blocking motion that elevates brand perception without compromising Core Web Vitals or SEO accessibility.

---

## 1. Native IntersectionObserver Scroll-Reveal Engine
Instead of bundling heavy third-party animation libraries (such as GSAP or AOS) that add 60+ KB of JavaScript and risk layout shifts (CLS), the website utilizes an ultra-lightweight, native `IntersectionObserver` system implemented in `assets/js/main.js`:

```javascript
// Lightweight scroll observer with safe progressive enhancement
if ('IntersectionObserver' in window) {
  document.documentElement.classList.add('js-reveal-ready');
  var observer = new IntersectionObserver(callback, { rootMargin: '0px 0px -40px 0px', threshold: 0.12 });
  // Observes .reveal-on-scroll, .reveal-stagger, .reveal-slide-left, .reveal-slide-right, .reveal-scale
}
```

### Motion Classes:
- `.reveal-on-scroll`: Smooth fade and slide up 28px (`cubic-bezier(0.16, 1, 0.3, 1)`).
- `.reveal-stagger`: Staggers child elements with 90ms incremental delays.
- `.reveal-scale`: Subtle zoom from 0.94 to 1.0.
- `.reveal-slide-left` / `.reveal-slide-right`: Directional entrance for split layouts.

---

## 2. Fail-Safe Progressive Enhancement & Accessibility
- **Zero Content Hiding:** If JavaScript is disabled or fails, all content is 100% visible by default (`html:not(.js-reveal-ready)` has full opacity and zero transforms).
- **Reduced Motion Support:** Complies strictly with `@media (prefers-reduced-motion: reduce)`, disabling all transforms, transitions, and delays.
- **Search Engine Accessibility:** All text and headings remain in the standard DOM tree, fully crawlable by Googlebot without waiting for user scroll events.

---

## 3. Interactive Micro-Interactions
- **Floating WhatsApp Tooltip:** Desktop tooltip with gentle hover transition (`opacity 0.3s ease, transform 0.3s ease`).
- **Interactive Process Tabs:** Vanilla JS tab switcher showing 4 delivery stages on the homepage.
- **Isotope-Style Portfolio Filters:** Category filtering with smooth opacity and scale transitions.
- **FAQ Accordions:** Accessible accordion toggling with rotating SVG chevrons and ARIA expansion attributes.
- **Card Hover Elevation:** Subtle `-5px` translateY elevation with glowing gold border highlights.
