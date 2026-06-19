import './style.css';
import { createIcons, icons } from 'lucide';

// Import Components
import { createNavbar } from './components/Navbar';
import { createHero } from './components/Hero';
import { createAbout } from './components/About';
import { createResearch } from './components/Research';
import { createPublications } from './components/Publications';
import { createTeaching } from './components/Teaching';
import { createGallery } from './components/Gallery';
import { createContact } from './components/Contact';
import { createFooter } from './components/Footer';

// Get the main app container
const app = document.querySelector('#app');

function renderApp() {
  // Clear existing content
  app.innerHTML = '';
  
  // Combine all components to create the single-page scroll layout
  const pageContent = `
    ${createNavbar()}
    <main>
      ${createHero()}
      ${createAbout()}
      ${createResearch()}
      ${createPublications()}
      ${createTeaching()}
      ${createGallery()}
      ${createContact()}
    </main>
    ${createFooter()}
  `;
  
  // Inject into DOM
  app.innerHTML = pageContent;
  
  // Initialize Lucide icons
  createIcons({
    icons,
    attrs: {
      class: 'lucide-icon',
      'stroke-width': 2,
    },
    nameAttr: 'data-lucide',
  });

  // Setup Mobile Menu Toggle Logic
  setupMobileMenu();
}

function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    // Close menu when a link is clicked
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
      });
    });
  }
}

// Initial render
renderApp();
