/**
 * PRO EVENT SOLUTIONS — Main Client Script
 * Features:
 *  - Google Tag & DataLayer CTA click tracking
 *  - Mobile Navigation Drawer & Submenus
 *  - Accessible FAQ Accordion
 *  - Sticky Header Scroll State
 *  - Central WhatsApp Configuration
 */

(function () {
  'use strict';

  // Central Config
  window.PES_CONFIG = {
    whatsappNumber: '+923074647635',
    whatsappRaw: '923074647635',
    gtmContainerId: 'GTM-PPNT33QP',
    brandName: 'Pro Event Solutions',
    city: 'Lahore, Pakistan'
  };

  // Google Tag & CTA Event Tracking
  function trackCtaClick(element) {
    var label = element.getAttribute('data-cta-label') || element.innerText.trim() || 'WhatsApp CTA';
    var location = element.getAttribute('data-cta-location') || 'page_body';
    var href = element.getAttribute('href') || '';
    
    // GTAG event
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'conversion',
        event_label: label,
        cta_location: location,
        destination_url: href,
        page_url: window.location.href,
        page_title: document.title
      });
    }

    // GTM DataLayer event
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: 'whatsapp_cta_click',
        cta_label: label,
        cta_location: location,
        cta_url: href,
        page_path: window.location.pathname,
        timestamp: new Date().toISOString()
      });
    }
  }

  // Global CTA Click Delegator
  document.addEventListener('click', function (e) {
    var target = e.target.closest('a[href*="wa.me"], a[href*="whatsapp.com"], [data-cta]');
    if (target) {
      trackCtaClick(target);
    }
  });

  // Sticky Header Scroll Effect
  var header = document.querySelector('.site-header');
  if (header) {
    var checkScroll = function () {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  // Mobile Drawer Navigation
  var toggleBtn = document.querySelector('.mobile-toggle');
  var drawer = document.querySelector('.mobile-drawer');
  var backdrop = document.querySelector('.drawer-backdrop');
  var closeBtn = document.querySelector('.drawer-close');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Mobile Drawer Accordion Submenus
  var drawerParentLinks = document.querySelectorAll('.drawer-parent-toggle');
  drawerParentLinks.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var subMenu = this.nextElementSibling;
      if (subMenu) {
        subMenu.classList.toggle('open');
        this.classList.toggle('expanded');
      }
    });
  });

  // FAQ Accordion
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', function () {
        var isOpen = item.classList.contains('active');
        // Close siblings if desired or let multiple stay open
        faqItems.forEach(function (other) {
          if (other !== item) other.classList.remove('active');
        });
        item.classList.toggle('active', !isOpen);
        questionBtn.setAttribute('aria-expanded', !isOpen);
      });
    }
  });

})();
