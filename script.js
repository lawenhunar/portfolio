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
      description: 'Mobile gym management application developed with Flutter',
      features: 'Features: Workout assignment, member management, training programs',
      screenshots: [
        'UST-GYM photos/1.png',
        'UST-GYM photos/2.png',
        'UST-GYM photos/3.png',
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
      description: 'Mobile application for delivery drivers developed with Flutter',
      features: 'Features: Order management, delivery tracking, navigation',
      screenshots: [
        'Kazhi-driver/1.png',
        'Kazhi-driver/2.png',
        'Kazhi-driver/3.png',
        'Kazhi-driver/4.png',
        'Kazhi-driver/5.png',
        'Kazhi-driver/6.png',
        'Kazhi-driver/7.png'
      ]
    },
    'kazhi-shop': {
      title: 'Kazhi Shop App Screenshots',
      description: 'Mobile application for shops to order deliveries developed with Flutter',
      features: 'Features: Order placement, delivery tracking, call center integration',
      screenshots: [
        'Kazhi-shop/1.png',
        'Kazhi-shop/2.png',
        'Kazhi-shop/3.png',
        'Kazhi-shop/4.png',
        'Kazhi-shop/5.png',
        'Kazhi-shop/6.png',
        'Kazhi-shop/7.png',
        'Kazhi-shop/8.png',
        'Kazhi-shop/9.png'
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

  // Current image index
  let currentIndex = 0;

  // Encode all screenshot paths
  const encodedScreenshots = config.screenshots.map(screenshot => 
    screenshot.split('/').map(part => encodeURIComponent(part)).join('/')
  );

  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 md:p-4';
  modal.id = 'screenshots-modal';
  modal.style.backdropFilter = 'blur(4px)';
  
  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'bg-gray-900 rounded-lg p-3 md:p-4 max-w-4xl w-full mx-auto border border-green-400/30 max-h-[95vh] flex flex-col';
  
  // Function to update the main image
  function updateMainImage(index) {
    currentIndex = index;
    const mainImg = modalContent.querySelector('#main-screenshot');
    const imgCounter = modalContent.querySelector('#img-counter');
    const thumbnails = modalContent.querySelectorAll('.thumbnail-item');
    
    if (mainImg) {
      mainImg.src = encodedScreenshots[index];
      mainImg.alt = `Screenshot ${index + 1}`;
    }
    
    if (imgCounter) {
      imgCounter.textContent = `${index + 1} / ${encodedScreenshots.length}`;
    }
    
    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.add('border-green-400', 'opacity-100');
        thumb.classList.remove('border-gray-600', 'opacity-60');
      } else {
        thumb.classList.remove('border-green-400', 'opacity-100');
        thumb.classList.add('border-gray-600', 'opacity-60');
      }
    });
    
    // Update navigation buttons (allow wrapping, so don't disable)
    const prevBtn = modalContent.querySelector('#prev-btn');
    const nextBtn = modalContent.querySelector('#next-btn');
    
    // Scroll active thumbnail into view
    if (thumbnails[index]) {
      thumbnails[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }

  // Define navigation functions before creating HTML
  window.updateScreenshotIndex = function(index) {
    updateMainImage(index);
  };
  
  window.navigateScreenshot = function(direction) {
    let newIndex = currentIndex + direction;
    // Wrap around
    if (newIndex < 0) newIndex = encodedScreenshots.length - 1;
    if (newIndex >= encodedScreenshots.length) newIndex = 0;
    updateMainImage(newIndex);
  };

  // Build thumbnails HTML
  const thumbnailsHTML = encodedScreenshots.map((screenshot, index) => `
    <div class="thumbnail-item cursor-pointer border-2 rounded transition-all flex-shrink-0 w-16 h-16 md:w-20 md:h-20 overflow-hidden ${
      index === 0 ? 'border-green-400 opacity-100' : 'border-gray-600 opacity-60 hover:opacity-80'
    }" onclick="updateScreenshotIndex(${index})">
      <img 
        src="${screenshot}" 
        alt="Thumbnail ${index + 1}" 
        class="w-full h-full object-cover rounded"
        loading="lazy"
      />
    </div>
  `).join('');

  modalContent.innerHTML = `
    <div class="flex justify-between items-center mb-2 pb-2 border-b border-gray-700 flex-shrink-0">
      <div>
        <h3 class="text-base md:text-lg font-bold text-green-400 font-mono">${config.title}</h3>
        <p class="text-xs text-gray-400 mt-0.5">${config.description}</p>
      </div>
      <button onclick="closeScreenshots()" class="text-gray-400 hover:text-white text-xl leading-none transition-colors">&times;</button>
    </div>
    
    <!-- Main Image Display -->
    <div class="relative mb-2 flex-1 flex items-center justify-center min-h-0">
      <div class="relative bg-gray-800 rounded-lg p-1 border border-gray-700 w-full h-full flex items-center justify-center">
        <img 
          id="main-screenshot"
          src="${encodedScreenshots[0]}" 
          alt="Screenshot 1" 
          class="max-w-full max-h-full w-auto h-auto rounded-lg object-contain"
          style="max-height: calc(95vh - 200px);"
        />
        
        <!-- Navigation Buttons -->
        <button 
          id="prev-btn"
          onclick="navigateScreenshot(-1)"
          class="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-900/90 border border-green-400/50 hover:border-green-400 hover:bg-gray-800 transition-all flex items-center justify-center text-green-400 z-10"
        >
          <i class="fas fa-chevron-left text-xs md:text-sm"></i>
        </button>
        
        <button 
          id="next-btn"
          onclick="navigateScreenshot(1)"
          class="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-900/90 border border-green-400/50 hover:border-green-400 hover:bg-gray-800 transition-all flex items-center justify-center text-green-400 z-10"
        >
          <i class="fas fa-chevron-right text-xs md:text-sm"></i>
        </button>
        
        <!-- Image Counter -->
        <div class="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/90 border border-green-400/50 rounded px-2 py-0.5">
          <span id="img-counter" class="text-green-400 text-xs font-mono">1 / ${encodedScreenshots.length}</span>
        </div>
      </div>
    </div>
    
    <!-- Thumbnails Strip -->
    <div class="border-t border-gray-700 pt-2 flex-shrink-0">
      <div class="thumbnail-scroll flex gap-1.5 overflow-x-auto pb-1" style="scrollbar-width: thin; scrollbar-color: rgba(0, 255, 127, 0.5) rgba(31, 41, 55, 1);">
        ${thumbnailsHTML}
      </div>
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

  // Keyboard navigation
  const keyHandler = (e) => {
    if (e.key === 'Escape') {
      closeScreenshots();
      document.removeEventListener('keydown', keyHandler);
    } else if (e.key === 'ArrowLeft') {
      navigateScreenshot(-1);
    } else if (e.key === 'ArrowRight') {
      navigateScreenshot(1);
    }
  };
  
  document.addEventListener('keydown', keyHandler);
  
  // Store cleanup function
  modal._cleanup = () => {
    document.removeEventListener('keydown', keyHandler);
    delete window.updateScreenshotIndex;
    delete window.navigateScreenshot;
  };
}

function closeScreenshots() {
  const modal = document.getElementById('screenshots-modal');
  if (modal) {
    // Cleanup event listeners
    if (modal._cleanup) {
      modal._cleanup();
    }
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

