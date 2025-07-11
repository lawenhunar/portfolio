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


// Contact form handling
var contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const messageDiv = document.getElementById("form-message");

    // Simulate form submission (replace with actual form handling)
    messageDiv.className = "mt-4 text-center text-blue-600";
    messageDiv.textContent = "Thank you for your message! I'll get back to you soon.";
    messageDiv.classList.remove("hidden");

    // Reset form
    this.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      messageDiv.classList.add("hidden");
    }, 5000);
  });
}

// Intersection Observer and ECharts initialization

document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll(
    ".fade-in-up, .fade-in-left, .fade-in-right"
  );
  animatedElements.forEach((el) => {
    el.classList.add("animate-on-scroll");
    observer.observe(el);
  });

  // ECharts: Languages Bar Chart
  const languagesChartEl = document.getElementById("languages");
  if (languagesChartEl && window.echarts) {
    const languagesChart = echarts.init(languagesChartEl);
    const languagesOption = {
      title: {
        text: "Languages Spoken",
        left: "center",
        top: 10,
      },
      tooltip: {},
      xAxis: {
        type: "category",
        data: ["Kurdish", "English", "Arabic", "Italian", "German"],
        axisLabel: { rotate: 20 },
      },
      yAxis: {
        type: "value",
        min: 0,
        max: 5,
        interval: 1,
        name: "Proficiency",
        nameLocation: "middle",
        nameGap: 40,
      },
      series: [
        {
          data: [5, 4, 3, 2, 2], // 5=Native, 4=Advanced, 3=Intermediate, 2=Basic
          type: "bar",
          itemStyle: {
            color: "#2563eb",
          },
          label: {
            show: true,
            position: "top",
            formatter: function (params) {
              return params.value === 5
                ? "Native"
                : params.value === 4
                ? "Advanced"
                : params.value === 3
                ? "Intermediate"
                : "Basic";
            },
          },
        },
      ],
    };
    languagesChart.setOption(languagesOption);
    window.addEventListener("resize", () => languagesChart.resize());
  }

  // ECharts: Education Gantt Chart
  const ganttEl = document.getElementById("gantt");
  if (ganttEl && window.echarts) {
    const ganttChart = echarts.init(ganttEl);
    const ganttOption = {
      title: {
        text: "Education Timeline",
        left: "center",
        top: 10,
      },
      tooltip: {
        formatter: function (params) {
          return params.name + ": " + params.value[0] + " - " + params.value[1];
        },
      },
      grid: {
        left: "10%",
        right: "10%",
        top: 60,
        bottom: 40,
      },
      xAxis: {
        type: "time",
        min: "2017-09-01",
        max: "2024-09-01",
        axisLabel: {
          formatter: function (value) {
            const date = new Date(value);
            return date.getFullYear();
          },
        },
      },
      yAxis: {
        type: "category",
        data: [
          "American University of Iraq",
          "Ca' Foscari University, Venice",
        ],
      },
      series: [
        {
          type: "bar",
          stack: "total",
          barWidth: 20,
          data: [
            {
              name: "American University of Iraq",
              value: ["2017-09-01", "2022-06-01"],
            },
            {
              name: "Ca' Foscari University, Venice",
              value: ["2021-09-01", "2022-02-01"],
            },
          ],
          itemStyle: {
            color: "#10b981",
          },
        },
      ],
    };
    ganttChart.setOption(ganttOption);
    window.addEventListener("resize", () => ganttChart.resize());
  }
});


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
})})

