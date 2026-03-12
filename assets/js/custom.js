(function () {
  "use strict";

  var revealElements = document.querySelectorAll(".reveal");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach(function (el) {
    observer.observe(el);
  });

  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.menu a[href^="#"], .mobile-menu a[href^="#"]'));
  var sections = Array.prototype.slice.call(document.querySelectorAll("section[id], div[id='contact']"));

  function setActiveLink() {
    var scrollPos = window.scrollY + 120;
    var activeId = "";

    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) {
        activeId = section.id;
      }
    });

    navLinks.forEach(function (link) {
      var isActive = link.getAttribute("href") === "#" + activeId;
      link.classList.toggle("is-active", isActive);
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  var filterLinks = Array.prototype.slice.call(document.querySelectorAll(".portfolio-menu a[data-portfolio-target-tag]"));
  var projectCards = Array.prototype.slice.call(document.querySelectorAll(".portfolio-cards .project-card"));

  filterLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var tag = link.getAttribute("data-portfolio-target-tag");

      filterLinks.forEach(function (item) {
        item.classList.remove("portfolio-menu__link--active");
      });
      link.classList.add("portfolio-menu__link--active");

      projectCards.forEach(function (card) {
        var cardTag = card.getAttribute("data-portfolio-tag");
        var show = tag === "all" || tag === cardTag;
        card.style.display = show ? "flex" : "none";
      });
    });
  });

  projectCards.forEach(function (card) {
    card.addEventListener("mousemove", function (e) {
      if (window.innerWidth <= 768) return;
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var rotateX = -((y / rect.height - 0.5) * 8);
      var rotateY = (x / rect.width - 0.5) * 8;
      card.style.transform = "perspective(900px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
    });

    card.addEventListener("mouseleave", function () {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    });
  });

  var backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 400) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
})();
