import { siteConfig } from '../data/siteConfig';

export function createHero() {
  return `
    <section id="profile-summary" class="relative bg-academic-ivory overflow-hidden pt-16 pb-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <!-- Image Column (Left Side, Rounded FaceShot) -->
          <div class="lg:col-span-4 mb-12 lg:mb-0 flex justify-center lg:justify-start">
            <div class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div class="absolute inset-0 rounded-full border-4 border-academic-gold opacity-50 scale-105"></div>
              <div class="absolute inset-0 rounded-full border border-academic-navy scale-110"></div>
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80" 
                alt="${siteConfig.author.name}" 
                class="w-full h-full object-cover rounded-full shadow-2xl relative z-10"
              />
            </div>
          </div>
          
          <!-- Text Column (Right Side) -->
          <div class="lg:col-span-8 text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-display font-black text-academic-navy sm:text-5xl md:text-6xl uppercase">
              ${siteConfig.author.name}
            </h1>
            <h2 class="mt-4 text-xl sm:text-2xl font-medium text-academic-gold tracking-widest uppercase border-b border-gray-200 pb-6 inline-block lg:block">
              ${siteConfig.author.title}
            </h2>
            
            <div class="mt-8 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              ${siteConfig.profileSummary.map(p => `<p class="mb-4">${p}</p>`).join('')}
            </div>
            
            <div class="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="/about/" class="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-none text-white bg-academic-navy hover:bg-academic-blue transition-colors shadow-lg">
                View Full Biography
              </a>
              <a href="${siteConfig.downloads[0]?.url || '#'}" class="inline-flex justify-center items-center px-8 py-4 border-2 border-academic-navy text-base font-bold rounded-none text-academic-navy bg-transparent hover:bg-academic-navy hover:text-white transition-colors">
                <i data-lucide="download" class="w-5 h-5 mr-2"></i> Download CV
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
      <!-- Academic Background Pattern -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 opacity-5 pointer-events-none hidden lg:block">
        <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
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
