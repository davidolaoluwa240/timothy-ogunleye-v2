import { siteConfig } from '../data/siteConfig';

export function createFooter() {
  const socialLinksHtml = siteConfig.socialMedia.map(social => `
    <a href="${social.url}" class="text-gray-400 hover:text-academic-gold transition-colors" aria-label="${social.platform}" title="${social.platform}">
      <i data-lucide="${social.icon || 'link'}" class="w-6 h-6"></i>
    </a>
  `).join('');

  return `
    <footer class="bg-academic-navy text-white pt-14 sm:pt-16 pb-8 border-t-4 border-academic-gold">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 mb-12">
          <div>
            <h3 class="text-2xl font-display font-bold mb-4 tracking-tight text-white">${siteConfig.author.name}</h3>
            <p class="text-gray-400 mb-6 text-sm leading-relaxed">
              Advancing trustworthy AI research, demanding doctoral mentorship, and deployable intelligent systems.
            </p>
            <div class="flex flex-wrap gap-4">
              ${socialLinksHtml}
            </div>
          </div>
          <div>
            <h4 class="font-semibold text-academic-gold mb-4 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul class="space-y-3 text-sm text-gray-300">
              <li class="flex items-start">
                <i data-lucide="map-pin" class="w-5 h-5 mr-3 text-gray-500 shrink-0"></i>
                <span>${siteConfig.author.office}</span>
              </li>
              <li class="flex items-center">
                <i data-lucide="mail" class="w-5 h-5 mr-3 text-gray-500 shrink-0"></i>
                <a href="mailto:${siteConfig.author.email}" class="hover:text-white transition-colors break-all">${siteConfig.author.email}</a>
              </li>
              <li class="flex items-center">
                <i data-lucide="phone" class="w-5 h-5 mr-3 text-gray-500 shrink-0"></i>
                <span>${siteConfig.author.phone}</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold text-academic-gold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul class="space-y-2 text-sm text-gray-300">
              ${siteConfig.quickLinks.slice(0, 5).map(link => `
                <li>
                  <a href="${link.url}" class="hover:text-white hover:underline transition-colors">${link.title}</a>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <p class="text-sm text-gray-500">&copy; ${new Date().getFullYear()} ${siteConfig.author.name}. All rights reserved.</p>
          <p class="text-sm text-gray-500">Academic Portfolio</p>
        </div>
      </div>
    </footer>
  `;
}
