import { siteConfig } from '../data/siteConfig';

export function createHero() {
  const paragraphsHtml = siteConfig.profileSummary.map(p => `
    <p class="text-lg text-gray-600 mb-6 leading-relaxed">
      ${p}
    </p>
  `).join('');

  return `
    <section class="relative bg-academic-ivory overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <!-- Text Content -->
          <div class="lg:col-span-7 mb-12 lg:mb-0">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-academic-blue/10 text-academic-blue font-medium text-sm mb-6 border border-academic-blue/20">
              <i data-lucide="graduation-cap" class="w-4 h-4 mr-2"></i>
              ${siteConfig.author.title}
            </div>
            
            <h1 class="text-5xl lg:text-6xl font-extrabold text-academic-navy mb-4 leading-tight font-display tracking-tight">
              ${siteConfig.author.name}
            </h1>
            
            <h2 class="text-xl text-academic-gold font-medium mb-8 uppercase tracking-widest">
              Research Portfolio & Academic Profile
            </h2>
            
            <div class="prose prose-lg text-gray-600 mb-10">
              ${paragraphsHtml}
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#about" class="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-md shadow-sm text-white bg-academic-navy hover:bg-academic-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-academic-blue transition-colors">
                Read Full Biography
              </a>
              <a href="#publications" class="inline-flex justify-center items-center px-8 py-4 border-2 border-academic-navy text-base font-semibold rounded-md text-academic-navy hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-academic-navy transition-colors">
                View Publications
              </a>
            </div>
          </div>
          
          <!-- Image Placeholder -->
          <div class="lg:col-span-5 relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-academic-gold/20 to-transparent transform translate-x-4 translate-y-4 -z-10 rounded-lg"></div>
            <div class="absolute inset-0 border-2 border-academic-gold transform translate-x-6 translate-y-6 -z-20 rounded-lg"></div>
            <div class="bg-gray-200 aspect-[4/5] rounded-lg shadow-xl overflow-hidden relative flex items-center justify-center">
              <div class="text-center p-8">
                <i data-lucide="user" class="w-24 h-24 mx-auto text-gray-400 mb-4"></i>
                <p class="text-sm text-gray-500 font-medium uppercase tracking-wider">Professional Headshot</p>
                <p class="text-xs text-gray-400 mt-2">Replace in src/assets/images/</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <!-- Decorative background element -->
      <div class="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-5 pointer-events-none">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404" aria-hidden="true">
          <defs>
            <pattern id="85737c0e-0916-41d7-917f-596dc7edfa27" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)" />
        </svg>
      </div>
    </section>
  `;
}
