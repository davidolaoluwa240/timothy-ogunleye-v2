import { siteConfig } from '../data/siteConfig';

export function createNavbar() {
  const menuHtml = siteConfig.menu.map(item => {
    const subItemsHtml = item.subItems ? item.subItems.map(subItem => `
      <li>
        <a href="${item.path === '/' ? `/${subItem.id}/` : `${item.path}${subItem.id}/`}" class="block px-6 py-3 text-sm text-gray-700 hover:bg-academic-navy hover:text-white transition-colors border-l-4 border-transparent hover:border-academic-gold">
          ${subItem.title}
        </a>
      </li>
    `).join('') : '';

    return `
      <li class="group relative">
        <a href="${item.path}" class="flex items-center py-4 text-academic-navy font-display font-bold text-[12px] xl:text-[13px] tracking-widest uppercase hover:text-academic-blue transition-colors border-b-[3px] border-transparent hover:border-academic-gold leading-tight">
          ${item.title}
          ${item.subItems ? `<i data-lucide="chevron-down" class="w-4 h-4 ml-1 opacity-50"></i>` : ''}
        </a>
        ${item.subItems ? `
          <ul class="absolute left-0 top-full w-64 bg-white border-t-4 border-academic-gold shadow-2xl hidden group-hover:block transition-all z-50">
            ${subItemsHtml}
          </ul>
        ` : ''}
      </li>
    `;
  }).join('');

  const mobileMenuHtml = siteConfig.menu.map(item => {
    const subItemsHtml = item.subItems ? item.subItems.map(subItem => `
      <a href="${item.path === '/' ? `/${subItem.id}/` : `${item.path}${subItem.id}/`}" class="block px-6 py-2 text-sm text-gray-600 hover:text-academic-navy hover:bg-gray-50 border-l-2 border-gray-200 ml-4">
        ${subItem.title}
      </a>
    `).join('') : '';

    return `
      <div class="mb-4">
        <a href="${item.path}" class="block px-3 py-3 rounded-md text-base font-display font-bold text-academic-navy bg-gray-50 mb-1 border-l-4 border-academic-gold">
          ${item.title}
        </a>
        ${subItemsHtml}
      </div>
    `;
  }).join('');

  return `
    <header class="w-full bg-white border-b-4 border-academic-navy sticky top-0 z-50 shadow-md">
      <!-- Top Row: Logo -->
      <div class="border-b border-gray-100 bg-academic-ivory">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center py-6">
            <div class="flex items-center">
              <a href="/" class="flex flex-col border-l-4 border-academic-gold pl-5 py-1 hover:opacity-80 transition-opacity">
                <span class="font-display font-black text-2xl sm:text-3xl text-academic-navy tracking-tight uppercase leading-tight">
                  ${siteConfig.author.name}
                </span>
                <span class="text-sm font-bold text-academic-gold uppercase tracking-widest mt-1">
                  ${siteConfig.author.title}
                </span>
              </a>
            </div>
            
            <div class="hidden lg:flex flex-col text-right">
              <span class="text-sm text-gray-500 font-medium">${siteConfig.author.office}</span>
              <a href="mailto:${siteConfig.author.email}" class="text-sm font-bold text-academic-navy hover:text-academic-gold transition-colors">${siteConfig.author.email}</a>
            </div>
            
            <!-- Mobile Menu Toggle -->
            <div class="lg:hidden flex items-center">
              <button id="mobile-menu-btn" class="text-academic-navy hover:text-academic-gold p-2 focus:outline-none transition-colors">
                <i data-lucide="menu" class="w-8 h-8"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Row: Navigation -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:block">
        <nav class="flex justify-start">
          <ul class="flex flex-wrap gap-x-6 xl:gap-x-10 gap-y-0">
            ${menuHtml}
          </ul>
        </nav>
      </div>
      
      <!-- Mobile Menu (Hidden by default) -->
      <div id="mobile-menu" class="lg:hidden hidden bg-white border-t border-gray-200 shadow-xl absolute w-full max-h-[80vh] overflow-y-auto z-40">
        <div class="px-4 py-6">
          ${mobileMenuHtml}
        </div>
      </div>
    </header>
  `;
}
