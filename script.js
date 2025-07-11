// Mobile menu toggle
document.getElementById("mobile-menu-btn").addEventListener("click", () => {
  const mobileMenu = document.getElementById("mobile-menu")
  mobileMenu.classList.toggle("hidden")
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })

      // Close mobile menu if open
      document.getElementById("mobile-menu").classList.add("hidden")
    }
  })
})

// Active navigation highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active")
    }
  })
})

// Contact form handling
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const messageDiv = document.getElementById("form-message")

  // Simulate form submission (replace with actual form handling)
  messageDiv.className = "mt-4 text-center text-blue-600"
  messageDiv.textContent = "Thank you for your message! I'll get back to you soon."
  messageDiv.classList.remove("hidden")

  // Reset form
  this.reset()

  // Hide message after 5 seconds
  setTimeout(() => {
    messageDiv.classList.add("hidden")
  }, 5000)
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated")
    }
  })
}, observerOptions)

// Observe all elements with animation classes
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right")
  animatedElements.forEach((el) => {
    el.classList.add("animate-on-scroll")
    observer.observe(el)
  })
})

// Typing effect for hero section (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Add scroll-to-top button
const scrollToTopBtn = document.createElement("button")
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
scrollToTopBtn.className =
  "fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 opacity-0 pointer-events-none"
scrollToTopBtn.id = "scroll-to-top"
document.body.appendChild(scrollToTopBtn)

// Show/hide scroll-to-top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.opacity = "1"
    scrollToTopBtn.style.pointerEvents = "auto"
  } else {
    scrollToTopBtn.style.opacity = "0"
    scrollToTopBtn.style.pointerEvents = "none"
  }
})

// Scroll to top functionality
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Parallax effect for hero section (subtle)
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.getElementById("home")
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})
