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
        max: '2026-12-01',
        axisLabel: {
          formatter: value => echarts.format.formatTime('yyyy', value)
        }
      },
      yAxis: {
        type: 'category',
        data: [
          'Mobile Application Developer',
          'Data Engineer / Full-Stack Developer',
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
            [0, '2025-08-01', '2026-08-01'], // Mobile Application Developer
            [1, '2024-08-01', '2025-08-01'], // Data Engineer / Full-Stack Developer
            [2, '2024-06-01', '2024-09-01'], // Full-Stack Developer
            [3, '2023-11-01', '2024-02-01']  // Web Developer
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

// Screenshots Modal Function
function showScreenshots(appName) {
  // Define screenshot configurations for each app
  const appConfigs = {
    'ust-gym': {
      title: 'UST GYM App Screenshots',
      description: 'Mobile gym management application built with Flutter',
      features: 'Features: Workout assignment, member management, training programs',
      screenshots: [
        'UST-GYM photos/Screenshot 2025-11-04 183159.png',
        'UST-GYM photos/Screenshot 2025-11-04 183219.png',
        'UST-GYM photos/Screenshot 2025-11-04 183236.png',
        'UST-GYM photos/Screenshot 2025-11-04 183255.png',
        'UST-GYM photos/Screenshot 2025-11-04 183317.png',
        'UST-GYM photos/Screenshot 2025-11-04 183336.png',
        'UST-GYM photos/Screenshot 2025-11-04 183347.png',
        'UST-GYM photos/Screenshot 2025-11-04 183404.png',
        'UST-GYM photos/Screenshot 2025-11-04 183423.png',
        'UST-GYM photos/Screenshot 2025-11-04 183435.png'
      ]
    },
    'kazhi-driver': {
      title: 'Kazhi Delivery Driver App Screenshots',
      description: 'Mobile application for delivery drivers built with Flutter',
      features: 'Features: Order management, delivery tracking, navigation',
      screenshots: [
        'Kazhi-driver/Screenshot 2025-11-04 173809.png',
        'Kazhi-driver/Screenshot 2025-11-04 173901.png',
        'Kazhi-driver/Screenshot 2025-11-04 173930.png',
        'Kazhi-driver/Screenshot 2025-11-04 173946.png',
        'Kazhi-driver/Screenshot 2025-11-04 174111.png',
        'Kazhi-driver/Screenshot 2025-11-04 174133.png',
        'Kazhi-driver/Screenshot 2025-11-04 174633.png'
      ]
    },
    'kazhi-shop': {
      title: 'Kazhi Shop App Screenshots',
      description: 'Mobile application for shops to order deliveries built with Flutter',
      features: 'Features: Order placement, delivery tracking, call center integration',
      screenshots: [
        'Kazhi-shop/Screenshot 2025-11-04 163433.png',
        'Kazhi-shop/Screenshot 2025-11-04 163457.png',
        'Kazhi-shop/Screenshot 2025-11-04 163550.png',
        'Kazhi-shop/Screenshot 2025-11-04 163614.png',
        'Kazhi-shop/Screenshot 2025-11-04 163639.png',
        'Kazhi-shop/Screenshot 2025-11-04 163833.png',
        'Kazhi-shop/Screenshot 2025-11-04 163904.png',
        'Kazhi-shop/Screenshot 2025-11-04 163922.png',
        'Kazhi-shop/Screenshot 2025-11-04 164021.png'
      ]
    }
  };

  const config = appConfigs[appName];
  if (!config) {
    console.error('Unknown app name:', appName);
    return;
  }

  // Remove any existing modal
  const existingModal = document.getElementById('screenshots-modal');
  if (existingModal) {
    existingModal.remove();
  }

  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4';
  modal.id = 'screenshots-modal';
  modal.style.backdropFilter = 'blur(4px)';
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'bg-gray-900 rounded-lg p-4 md:p-6 max-w-6xl max-h-[90vh] overflow-y-auto mx-auto border border-green-400/30';
  
  // Build screenshots grid
  const screenshotsHTML = config.screenshots.map((screenshot, index) => {
    // URL encode the screenshot path to handle spaces in folder/file names
    const encodedScreenshot = screenshot.split('/').map(part => encodeURIComponent(part)).join('/');
    return `
    <div class="fade-in-up" style="animation-delay: ${index * 0.1}s">
      <img 
        src="${encodedScreenshot}" 
        alt="Screenshot ${index + 1}" 
        class="w-full h-auto rounded-lg border border-gray-700 hover:border-green-400/50 transition-colors cursor-pointer shadow-lg"
        onclick="openImageModal('${encodedScreenshot}')"
        loading="lazy"
      />
    </div>
  `;
  }).join('');

  modalContent.innerHTML = `
    <div class="flex justify-between items-center mb-4 pb-4 border-b border-gray-700">
      <div>
        <h3 class="text-xl md:text-2xl font-bold text-green-400 font-mono">${config.title}</h3>
        <p class="text-sm text-gray-400 mt-1">${config.description}</p>
      </div>
      <button onclick="closeScreenshots()" class="text-gray-400 hover:text-white text-3xl leading-none transition-colors">&times;</button>
    </div>
    <div class="text-center text-gray-400 mb-6 text-sm">
      <p>${config.features}</p>
      <p class="mt-2 text-xs text-gray-500">Click on any screenshot to view full size</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      ${screenshotsHTML}
    </div>
  `;
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeScreenshots();
    }
  });

  // Close modal with Escape key
  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      closeScreenshots();
      document.removeEventListener('keydown', escapeHandler);
    }
  };
  document.addEventListener('keydown', escapeHandler);
}

function closeScreenshots() {
  const modal = document.getElementById('screenshots-modal');
  if (modal) {
    modal.remove();
  }
}

// Image Modal for full-size view
function openImageModal(imageSrc) {
  // Remove any existing image modal
  const existingImageModal = document.getElementById('image-modal');
  if (existingImageModal) {
    existingImageModal.remove();
  }

  const imageModal = document.createElement('div');
  imageModal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] p-4';
  imageModal.id = 'image-modal';
  
  imageModal.innerHTML = `
    <div class="relative max-w-5xl max-h-[95vh] w-full">
      <button onclick="closeImageModal()" class="absolute top-4 right-4 text-white hover:text-green-400 text-4xl z-10 transition-colors">&times;</button>
      <img 
        src="${imageSrc}" 
        alt="Full size screenshot" 
        class="w-full h-auto rounded-lg shadow-2xl"
      />
    </div>
  `;
  
  document.body.appendChild(imageModal);
  
  // Close when clicking outside
  imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
      closeImageModal();
    }
  });

  // Close with Escape key
  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      closeImageModal();
      document.removeEventListener('keydown', escapeHandler);
    }
  };
  document.addEventListener('keydown', escapeHandler);
}

function closeImageModal() {
  const imageModal = document.getElementById('image-modal');
  if (imageModal) {
    imageModal.remove();
  }
}

