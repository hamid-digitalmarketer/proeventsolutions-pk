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


  // 1. Process Tabs Switcher
  var tabButtons = document.querySelectorAll('.tab-nav-btn');
  var tabPanes = document.querySelectorAll('.tab-pane-card');
  if (tabButtons.length > 0 && tabPanes.length > 0) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var targetStep = this.getAttribute('data-tab-target');
        tabButtons.forEach(function (b) { b.classList.remove('active'); });
        tabPanes.forEach(function (p) { p.classList.remove('active'); });
        this.classList.add('active');
        var targetCard = document.querySelector('.tab-pane-card[data-tab-content="' + targetStep + '"]');
        if (targetCard) targetCard.classList.add('active');
      });
    });
  }

  // 2. Isotope-Style Filterable Portfolio Gallery
  var filterButtons = document.querySelectorAll('.filter-pill');
  var portfolioItems = document.querySelectorAll('.portfolio-card-item');
  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var category = this.getAttribute('data-filter');
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');
        portfolioItems.forEach(function (item) {
          var itemCategory = item.getAttribute('data-category') || '';
          if (category === 'all' || itemCategory.indexOf(category) !== -1) {
            item.style.display = 'flex';
            setTimeout(function () { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 20);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(function () { item.style.display = 'none'; }, 250);
          }
        });
      });
    });
  }

  // 3. Quick Inquiry Ribbon Bar Handler
  var quickInquiryBtn = document.getElementById('btn-quick-inquiry');
  if (quickInquiryBtn) {
    quickInquiryBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var eventType = document.getElementById('quick-event-type') ? document.getElementById('quick-event-type').value : 'Event';
      var eventDate = document.getElementById('quick-event-date') ? document.getElementById('quick-event-date').value : 'Upcoming Date';
      var eventArea = document.getElementById('quick-event-area') ? document.getElementById('quick-event-area').value : 'Lahore';
      
      var message = "Hello Pro Event Solutions! I am planning an event in Lahore:\n" +
                    "- Event Type: " + eventType + "\n" +
                    "- Target Date: " + (eventDate || 'Flexible') + "\n" +
                    "- Preferred Area: " + eventArea + "\n" +
                    "Please let me know availability and 3D design concept options.";
      
      var waUrl = "https://wa.me/923074647635?text=" + encodeURIComponent(message);
      
      // Track GTM event
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'quick_inquiry_submit', {
          event_category: 'inquiry',
          event_type: eventType,
          event_area: eventArea
        });
      }
      
      window.open(waUrl, '_blank');
    });
  }

  // 4. Interactive Full Quote Builder Handler
  var quoteBuilderBtn = document.getElementById('btn-dispatch-quote');
  if (quoteBuilderBtn) {
    quoteBuilderBtn.addEventListener('click', function (e) {
      e.preventDefault();
      var name = document.getElementById('qb-name') ? document.getElementById('qb-name').value.trim() : '';
      var phone = document.getElementById('qb-phone') ? document.getElementById('qb-phone').value.trim() : '';
      var type = document.getElementById('qb-type') ? document.getElementById('qb-type').value : 'Event';
      var date = document.getElementById('qb-date') ? document.getElementById('qb-date').value : '';
      var guests = document.getElementById('qb-guests') ? document.getElementById('qb-guests').value : '';
      var location = document.getElementById('qb-location') ? document.getElementById('qb-location').value : 'Lahore';
      var notes = document.getElementById('qb-notes') ? document.getElementById('qb-notes').value.trim() : '';

      var formatted = "Hello Pro Event Solutions Team!\n" +
                      "I would like an itemized quotation for my event:\n" +
                      "- Name: " + (name || 'Client') + "\n" +
                      (phone ? "- Contact: " + phone + "\n" : "") +
                      "- Event Type: " + type + "\n" +
                      "- Date: " + (date || 'TBD') + "\n" +
                      "- Expected Guests: " + (guests || 'TBD') + "\n" +
                      "- Venue / Area: " + location + "\n" +
                      (notes ? "- Details: " + notes + "\n" : "") +
                      "Please share design concepts, availability, and an itemized quote.";

      var waUrl = "https://wa.me/923074647635?text=" + encodeURIComponent(formatted);

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'full_quote_submit', {
          event_category: 'lead_generation',
          event_type: type,
          event_location: location
        });
      }

      window.open(waUrl, '_blank');
    });
  }

})();