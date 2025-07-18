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
});

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
const ganttChart = echarts.init(document.getElementById('gantt'));
    const ganttOption = {

      tooltip: {
        formatter: params => {
          return `${params.name}<br/>${params.value[1]} to ${params.value[2]}`;
        }
      },
      xAxis: {
        type: 'time',
        min: '2019-09-01',
        max: '2025-04-01',
        axisLabel: {
          formatter: value => echarts.format.formatTime('yyyy-MM', value)
        }
      },
      yAxis: {
        type: 'category',
        data: [
          'Technopreneurship - India',
          'Ca’ Foscari - Exchange',
          'AUIS - Software Engineering'
        ]
      },
      series: [
        {
          type: 'custom',
          renderItem: (params, api) => {
            const categoryIndex = api.value(0);
            const start = api.coord([api.value(1), categoryIndex]);
            const end = api.coord([api.value(2), categoryIndex]);
            const height = api.size([0, 1])[1] * 0.6;

            return {
              type: 'rect',
              shape: echarts.graphic.clipRectByRect(
                {
                  x: start[0],
                  y: start[1] - height / 2,
                  width: end[0] - start[0],
                  height: height
                },
                {
                  x: params.coordSys.x,
                  y: params.coordSys.y,
                  width: params.coordSys.width,
                  height: params.coordSys.height
                }
              ),
              style: api.style()
            };
          },
          itemStyle: {
            color: '#5470C6'
          },
          encode: {
            x: [1, 2],
            y: 0
          },
          data: [
            [0, '2025-02-01', '2025-03-01'], // Technopreneurship - India
            [1, '2023-02-01', '2023-06-01'], // Exchange - Ca' Foscari
            [2, '2020-09-01', '2024-06-01']  // AUIS
          ]
        }
      ]
    };
    ganttChart.setOption(ganttOption);
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
  // Work Experience Timeline Chart
  const workTimelineEl = document.getElementById('work-timeline');
  if (workTimelineEl && window.echarts) {
    const workChart = echarts.init(workTimelineEl);
    const workOption = {

      tooltip: {
        formatter: params => {
          return `${params.name}<br/>${params.value[1]} to ${params.value[2]}`;
        }
      },
      xAxis: {
        type: 'time',
        min: '2023-10-01',
        max: '2025-07-01',
        axisLabel: {
          formatter: value => echarts.format.formatTime('yyyy', value)
        }
      },
      yAxis: {
        type: 'category',
        data: [
          'Data Analyst / Software Developer',
          'Full-Stack Developer',
          'Web Developer'
        ]
      },
      series: [
        {
          type: 'custom',
          renderItem: (params, api) => {
            const categoryIndex = api.value(0);
            const start = api.coord([api.value(1), categoryIndex]);
            const end = api.coord([api.value(2), categoryIndex]);
            const height = api.size([0, 1])[1] * 0.6;

            return {
              type: 'rect',
              shape: echarts.graphic.clipRectByRect(
                {
                  x: start[0],
                  y: start[1] - height / 2,
                  width: end[0] - start[0],
                  height: height
                },
                {
                  x: params.coordSys.x,
                  y: params.coordSys.y,
                  width: params.coordSys.width,
                  height: params.coordSys.height
                }
              ),
              style: api.style()
            };
          },
          itemStyle: {
            color: '#f59e42'
          },
          encode: {
            x: [1, 2],
            y: 0
          },
          data: [
            [0, '2024-08-01', '2025-04-01'], // Data Analyst / Software Developer
            [1, '2024-06-01', '2024-09-01'], // Full-Stack Developer
            [2, '2023-11-01', '2024-02-01']  // Web Developer
          ]
        }
      ]
    };
    workChart.setOption(workOption);
  }
});


// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

