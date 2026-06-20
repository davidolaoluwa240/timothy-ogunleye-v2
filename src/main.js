import './style.css';
import { createIcons, icons } from 'lucide';

// Import Components
import { createNavbar } from './components/Navbar';
import { createHero } from './components/Hero';
import { createFooter } from './components/Footer';
import { siteConfig } from './data/siteConfig';

// Get the main app container
const app = document.querySelector('#app');

function renderApp() {
  // Clear existing content
  app.innerHTML = '';
  
  // Render Home Page
  const pageContent = `
    ${createNavbar()}
    <main class="min-h-screen">
      ${createHero()}
      
      <!-- Key Metrics Section -->
      <section class="py-12 bg-academic-navy text-white border-y-4 border-academic-gold">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            ${siteConfig.metrics.map(metric => `
              <div class="px-4 py-6 border border-white/10 bg-white/5 min-h-36 flex flex-col justify-center">
                <div class="text-3xl sm:text-4xl font-display font-black text-academic-gold mb-2 break-words">${metric.value}</div>
                <div class="text-xs sm:text-sm uppercase tracking-widest font-bold">${metric.label}</div>
                <p class="mt-2 text-xs text-gray-300 leading-relaxed hidden sm:block">${metric.detail}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Dashboard Grid -->
      <section class="py-16 bg-academic-ivory">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <!-- Left Column: Announcements & Brief Bio -->
            <div class="lg:col-span-1 space-y-12">
              
              <!-- Mini Biography -->
              <div class="bg-white p-8 border border-gray-200 border-t-4 border-t-academic-navy shadow-sm">
                <h3 class="text-xl font-display font-black text-academic-navy mb-4 uppercase tracking-widest border-b border-gray-100 pb-3 flex items-center">
                  <i data-lucide="user" class="w-5 h-5 mr-2 text-academic-gold"></i>
                  About the Professor
                </h3>
                <p class="text-sm text-gray-600 leading-relaxed italic mb-4">
                  "${siteConfig.biography.substring(0, 150)}..."
                </p>
                <a href="/about/biography/" class="text-sm font-bold text-academic-blue hover:text-academic-gold uppercase tracking-widest">
                  Read Full Biography &rarr;
                </a>
              </div>

              <!-- Latest News -->
              <div class="bg-white p-8 border border-gray-200 border-t-4 border-t-academic-gold shadow-sm">
                <h3 class="text-xl font-display font-black text-academic-navy mb-4 uppercase tracking-widest border-b border-gray-100 pb-3 flex items-center">
                  <i data-lucide="radio" class="w-5 h-5 mr-2 text-academic-gold"></i>
                  Recent Updates
                </h3>
                <div class="space-y-4">
                  ${siteConfig.news.slice(0, 2).map(n => `
                    <div>
                      <span class="text-xs font-bold text-gray-400 uppercase tracking-widest">${n.date}</span>
                      <h4 class="text-sm font-bold text-academic-navy leading-tight mt-1 mb-1">${n.title}</h4>
                      <p class="text-xs text-gray-500">${n.summary.substring(0, 60)}...</p>
                    </div>
                  `).join('')}
                </div>
                <a href="/news-events/news/" class="inline-block mt-6 text-sm font-bold text-academic-blue hover:text-academic-gold uppercase tracking-widest">
                  View All News &rarr;
                </a>
              </div>

            </div>

            <!-- Right Column: Grants & Publications -->
            <div class="lg:col-span-2 space-y-12">
              
              <!-- Highlighted Grants -->
              <div>
                <h3 class="text-2xl font-display font-black text-academic-navy mb-6 uppercase tracking-widest border-b-2 border-academic-gold pb-3 flex items-center">
                  <i data-lucide="microscope" class="w-6 h-6 mr-3 text-academic-gold"></i>
                  Major Research Initiatives
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  ${siteConfig.grants.slice(0, 2).map(grant => `
                    <div class="bg-white p-6 border border-gray-200 shadow-sm hover:border-academic-gold transition-colors">
                      <span class="inline-block px-2 py-1 bg-green-100 text-green-800 text-[10px] font-bold uppercase tracking-widest mb-2">${grant.amount} Funding</span>
                      <h4 class="text-lg font-bold text-academic-navy leading-tight mb-2">${grant.title}</h4>
                      <p class="text-xs text-gray-500 font-bold uppercase tracking-widest">${grant.agency} | ${grant.period}</p>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Selected Publications -->
              <div>
                <h3 class="text-2xl font-display font-black text-academic-navy mb-6 uppercase tracking-widest border-b-2 border-academic-gold pb-3 flex items-center">
                  <i data-lucide="book-open" class="w-6 h-6 mr-3 text-academic-gold"></i>
                  Selected Publications
                </h3>
                <div class="space-y-4">
                  ${siteConfig.publications.articles.slice(0, 3).map(art => `
                    <div class="bg-white p-6 border border-gray-200 shadow-sm flex items-start">
                      <div class="bg-academic-navy text-white text-xs font-bold px-2 py-1 mr-4">${art.year}</div>
                      <p class="text-sm text-gray-700 font-serif leading-relaxed">
                        ${art.citation}
                      </p>
                    </div>
                  `).join('')}
                </div>
                <div class="mt-6 text-right">
                  <a href="/publications/journal-articles/" class="inline-block px-6 py-3 bg-academic-navy text-white font-bold uppercase tracking-widest text-sm hover:bg-academic-gold transition-colors">
                    View Full Publication Archive
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      
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
