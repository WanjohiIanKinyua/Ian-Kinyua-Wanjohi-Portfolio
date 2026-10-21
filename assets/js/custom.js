(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var backToTop = document.getElementById("backToTop");

  // Reveal elements as they scroll into view
  var revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("in-view");
    });
  }

  // Mobile menu
  function closeMenu() {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }

  navToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  document.querySelectorAll(".nav__links a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  // Nav background, active link and back-to-top button
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle("is-scrolled", y > 20);
    backToTop.classList.toggle("show", y > 500);

    var activeId = "";
    sections.forEach(function (section) {
      if (y + 140 >= section.offsetTop) {
        activeId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("href") === "#" + activeId);
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Project filter
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll(".filters__btn"));
  var projects = Array.prototype.slice.call(document.querySelectorAll(".project"));

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var filter = button.getAttribute("data-filter");

      filterButtons.forEach(function (item) {
        item.classList.toggle("is-active", item === button);
        item.setAttribute("aria-pressed", item === button ? "true" : "false");
      });

      projects.forEach(function (project) {
        var show = filter === "all" || project.getAttribute("data-category") === filter;
        project.classList.toggle("is-hidden", !show);
        if (show) project.classList.add("in-view");
      });
    });
  });

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
