// Portfolio Data
const portfolioData = {
  socialLinks: {
    github: "https://github.com/rohitranvir",
    linkedin: "www.linkedin.com/in/rohit-ranveer",
    twitter: "https://www.facebook.com/share/16CB8f1FF4/",
  },
  skills: [
    { name: "Java", icon: "fab fa-java", level: 90 },
    { name: "JavaScript", icon: "fab fa-js", level: 85 },
    { name: "React", icon: "fab fa-react", level: 80 },
    { name: "Node.js", icon: "fab fa-node-js", level: 75 },
    { name: "HTML5", icon: "fab fa-html5", level: 95 },
    { name: "CSS3", icon: "fab fa-css3-alt", level: 90 },
    { name: "MySQL", icon: "fas fa-database", level: 80 },
    { name: "Git", icon: "fab fa-git-alt", level: 85 },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description:
        "Full-featured online store with product catalog, cart, and checkout system.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "images/project1.jpg",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Productivity application for organizing tasks with drag-and-drop functionality.",
      technologies: ["JavaScript", "Firebase", "Material UI"],
      image: "images/project2.jpg",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio website showcasing creative work and skills.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "images/project3.jpg",
      link: "#",
    },
  ],
  testimonials: [
    {
      name: "Rajesh Sharma",
      role: "CEO at TechSolutions",
      text: "Rohit delivered our project ahead of schedule with excellent quality. His attention to detail is remarkable.",
      image: "images/client1.jpg",
    },
    {
      name: "Priya Patel",
      role: "Product Manager at DigitalCreations",
      text: "Working with Rohit was a pleasure. He understood our requirements perfectly and delivered beyond expectations.",
      image: "images/client2.jpg",
    },
  ],
  timeline: [
    {
      year: "2021-Present",
      title: "B.E in Computer Science",
      institution: "Babasaheb Naik College of Engineering",
      description:
        "Currently pursuing degree with focus on software development and web technologies.",
    },
    {
      year: "2023-Present",
      title: "Full Stack Developer Intern",
      institution: "Zidio Development",
      description:
        "Working on building web applications using React and Node.js.",
    },
    {
      year: "2021-2023",
      title: "Freelance Web Developer",
      institution: "Self-Employed",
      description:
        "Developed websites and web applications for various clients.",
    },
  ],
  stats: {
    projectsCompleted: 12,
    happyClients: 8,
    codingHours: 2500,
  },
};

// Initialize Portfolio
document.addEventListener("DOMContentLoaded", function () {
  // Common Initialization
  setCurrentYear();
  initializeSocialLinks();

  // Page-Specific Initialization
  if (document.getElementById("typing-text")) {
    initializeTypingEffect();
  }

  if (document.getElementById("skills-container")) {
    loadSkills();
  }

  if (document.getElementById("projects-container")) {
    loadProjects();
  }

  if (document.getElementById("testimonial-slider")) {
    loadTestimonials();
  }

  if (document.getElementById("experience-timeline")) {
    loadTimeline();
  }

  if (document.getElementById("skills-bars-container")) {
    loadSkillBars();
  }

  if (document.getElementById("availability-status")) {
    checkAvailability();
  }

  if (document.getElementById("contactForm")) {
    initializeFormValidation();
  }

  if (document.querySelector(".stats-grid")) {
    animateStatistics();
  }
});

// Common Functions
function setCurrentYear() {
  const yearElements = document.querySelectorAll("#current-year");
  if (yearElements.length > 0) {
    const currentYear = new Date().getFullYear();
    yearElements.forEach((el) => {
      el.textContent = currentYear;
    });
  }
}

function initializeSocialLinks() {
  for (const [platform, url] of Object.entries(portfolioData.socialLinks)) {
    const link = document.getElementById(`${platform}-link`);
    if (link) {
      link.href = url;
      link.target = "_blank";
    }
  }
}

// Home Page Functions
function initializeTypingEffect() {
  const phrases = [
    "Building Digital Solutions That Matter",
    "Creating Responsive Web Applications",
    "Developing Modern Web Experiences",
  ];
  const typingElement = document.getElementById("typing-text");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1500;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

function loadSkills() {
  const container = document.getElementById("skills-container");
  portfolioData.skills.forEach((skill) => {
    const skillElement = document.createElement("div");
    skillElement.className = "skill-item fade-in";
    skillElement.style.animationDelay = `${
      portfolioData.skills.indexOf(skill) * 0.1
    }s`;
    skillElement.innerHTML = `
            <i class="${skill.icon}"></i>
            <p>${skill.name}</p>
        `;
    container.appendChild(skillElement);
  });
}

function loadProjects() {
  const container = document.getElementById("projects-container");
  portfolioData.projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project-card slide-up";
    projectElement.style.animationDelay = `${
      portfolioData.projects.indexOf(project) * 0.1
    }s`;
    projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies
                      .map((tech) => `<span>${tech}</span>`)
                      .join("")}
                </div>
                <a href="${project.link}" class="project-link">View Project</a>
            </div>
        `;
    container.appendChild(projectElement);
  });
}

function loadTestimonials() {
  const container = document.getElementById("testimonial-slider");
  portfolioData.testimonials.forEach((testimonial) => {
    const testimonialElement = document.createElement("div");
    testimonialElement.className = "testimonial";
    testimonialElement.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}" class="client-img">
            <p class="testimonial-text">"${testimonial.text}"</p>
            <p class="client-name">- ${testimonial.name}, ${testimonial.role}</p>
        `;
    container.appendChild(testimonialElement);
  });
}

function animateStatistics() {
  const animateValue = (id, start, end, duration) => {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  animateValue(
    "projects-completed",
    0,
    portfolioData.stats.projectsCompleted,
    2000
  );
  animateValue("happy-clients", 0, portfolioData.stats.happyClients, 2000);
  animateValue("coding-hours", 0, portfolioData.stats.codingHours, 2000);
}

// About Page Functions
function loadTimeline() {
  const container = document.getElementById("experience-timeline");
  portfolioData.timeline.forEach((item) => {
    const timelineItem = document.createElement("div");
    timelineItem.className = "timeline-item fade-in";
    timelineItem.style.animationDelay = `${
      portfolioData.timeline.indexOf(item) * 0.2
    }s`;
    timelineItem.innerHTML = `
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-content">
                <h4>${item.title}</h4>
                <p class="timeline-institution">${item.institution}</p>
                <p>${item.description}</p>
            </div>
        `;
    container.appendChild(timelineItem);
  });
}

function loadSkillBars() {
  const container = document.getElementById("skills-bars-container");
  portfolioData.skills.forEach((skill) => {
    const skillBar = document.createElement("div");
    skillBar.className = "skill-bar fade-in";
    skillBar.style.animationDelay = `${
      portfolioData.skills.indexOf(skill) * 0.1
    }s`;
    skillBar.innerHTML = `
            <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-percent">${skill.level}%</span>
            </div>
            <div class="progress-bar">
                <div class="progress" style="width: ${skill.level}%"></div>
            </div>
        `;
    container.appendChild(skillBar);
  });
}

// Contact Page Functions
function checkAvailability() {
  const statusElement = document.getElementById("availability-status");
  const now = new Date();
  const hours = now.getHours();

  if (hours >= 9 && hours < 18) {
    statusElement.textContent = "Available for work";
    statusElement.style.color = "#4CAF50";
  } else {
    statusElement.textContent = "Available tomorrow from 9AM";
    statusElement.style.color = "#FF9800";
  }
}

function initializeFormValidation() {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validateForm()) {
      submitForm();
    }
  });

  function validateForm() {
    let isValid = true;

    // Name Validation
    const name = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    if (name.value.trim() === "") {
      nameError.textContent = "Name is required";
      name.classList.add("is-invalid");
      isValid = false;
    } else {
      nameError.textContent = "";
      name.classList.remove("is-invalid");
    }

    // Email Validation
    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      emailError.textContent = "Email is required";
      email.classList.add("is-invalid");
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      emailError.textContent = "Please enter a valid email";
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      emailError.textContent = "";
      email.classList.remove("is-invalid");
    }

    // Message Validation
    const message = document.getElementById("message");
    const messageError = document.getElementById("message-error");
    if (message.value.trim() === "") {
      messageError.textContent = "Message is required";
      message.classList.add("is-invalid");
      isValid = false;
    } else {
      messageError.textContent = "";
      message.classList.remove("is-invalid");
    }

    return isValid;
  }

  function submitForm() {
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    submitBtn.classList.add("sending");

    // Simulate form submission
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
      submitBtn.classList.remove("sending");
      submitBtn.classList.add("success");

      setTimeout(() => {
        // Uncomment this line for actual form submission
        // form.submit();

        // For demo, redirect to thank you page
        window.location.href = "thank-you.html";
      }, 1000);
    }, 1500);
  }
}
