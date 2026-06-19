import { siteConfig } from '../data/siteConfig';

export function createNavbar() {
  const menuHtml = siteConfig.menu.map(item => `
    <li>
      <a href="${item.path}" class="block py-2 text-academic-navy hover:text-academic-blue font-medium transition-colors border-b-2 border-transparent hover:border-academic-gold">
        ${item.title}
      </a>
    </li>
  `).join('');

  const mobileMenuHtml = siteConfig.menu.map(item => `
    <a href="${item.path}" class="block px-3 py-2 rounded-md text-base font-medium text-academic-navy hover:text-academic-blue hover:bg-gray-50">
      ${item.title}
    </a>
  `).join('');

  // We add an id="mobile-menu" to toggle it in main.js
  return `
    <header class="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          
          <div class="flex-shrink-0 flex items-center">
            <a href="#home" class="flex flex-col">
              <span class="font-display font-bold text-xl text-academic-navy tracking-tight uppercase">
                ${siteConfig.author.name}
              </span>
              <span class="text-xs font-medium text-academic-gold uppercase tracking-wider">
                Academic Portfolio
              </span>
            </a>
          </div>

          <nav class="hidden md:flex space-x-8">
            <ul class="flex space-x-8">
              ${menuHtml}
            </ul>
          </nav>

          <div class="md:hidden flex items-center">
            <button id="mobile-menu-btn" class="text-gray-500 hover:text-academic-navy p-2 focus:outline-none">
              <i data-lucide="menu" class="w-6 h-6"></i>
            </button>
          </div>

        </div>
      </div>
      
      <!-- Mobile Menu (Hidden by default) -->
      <div id="mobile-menu" class="md:hidden hidden bg-white border-t border-gray-100">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          ${mobileMenuHtml}
        </div>
      </div>
    </header>
  `;
}
