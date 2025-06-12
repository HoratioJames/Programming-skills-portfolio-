// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Language Cards Click Handlers
const projectsData = {
    JavaScript: [
        { name: 'Weather App', description: 'Simple weather application using API' },
        { name: 'E-Commerce Product Showcase Site', description: 'A full product landing page with categories, cart logic, product filtering, and mock checkout.' },
        { name: 'Calculator', description: 'Basic calculator with operations' },
        { name: 'Portfolio Website', description: 'Personal portfolio showcase' },
        { name: 'Quiz Game', description: 'Interactive quiz application' },
        { name: 'Image Gallery', description: 'Responsive image gallery' },
        { name: 'User Dashboard', description: 'A task or content management dashboard' },
        { name: 'Blog Website', description: 'Users can navigate blog categories and read full articles' }
    ],
    Python: [
        { name: 'Data Analyzer', description: 'CSV data analysis tool' },
        { name: 'Restaurant Management System', description: 'helps restaurant owners and managers streamline day-to-day operations' },
        { name: 'Password Generator', description: 'Secure password creation tool' },
        { name: 'File Organizer', description: 'Automatic file sorting system' },
        { name: 'E-Learning platform', description: 'Users can browse and enroll in courses, take quizzes, and track progress' }
    ],
    Java: [
        { name: 'Simple Calculator', description: 'Basic arithmetic operations' },
        { name: 'Student Grade System', description: 'Grade calculation and storage' }
    ]
};

document.querySelectorAll('.language-card').forEach(card => {
    card.addEventListener('click', () => {
        const language = card.getAttribute('data-language');
        const projects = projectsData[language];
        showProjects(language, projects);
    });
});

// Modal Functions
const modal = document.getElementById('projectsModal');
const closeBtn = document.querySelector('.close');

function showProjects(language, projects) {
    const modalTitle = document.getElementById('modalTitle');
    const projectsList = document.getElementById('projectsList');
    
    modalTitle.textContent = `${language} Projects`;
    
    projectsList.innerHTML = '';
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item';
        projectDiv.innerHTML = `
            <h4>${project.name}</h4>
            <p>${project.description}</p>
        `;
        projectsList.appendChild(projectDiv);
    });
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to language cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.language-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Enhanced navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});
