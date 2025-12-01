// Tailwind CSS Configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",
        secondary: "#06B6D4",
        accent: "#F59E0B",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
};

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      const icon = mobileMenuBtn.querySelector("i");
      if (mobileMenu.classList.contains("hidden")) {
        icon.className = "fas fa-bars text-xl";
      } else {
        icon.className = "fas fa-times text-xl";
      }
    });
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // Close mobile menu if open
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileMenuBtn = document.getElementById("mobile-menu-btn");
      if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        const icon = mobileMenuBtn.querySelector("i");
        icon.className = "fas fa-bars text-xl";
      }

      // Smooth scroll to target
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Enhanced scroll effect to navigation
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("bg-white/95", "backdrop-blur-md", "shadow-lg");
    nav.classList.remove("shadow-sm", "bg-white");
  } else {
    nav.classList.remove("bg-white/95", "backdrop-blur-md", "shadow-lg");
    nav.classList.add("shadow-sm", "bg-white");
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animate-fade-in-up");
  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });
});

