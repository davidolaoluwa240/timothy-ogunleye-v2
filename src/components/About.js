import { siteConfig } from '../data/siteConfig';

export function createAbout() {
  
  const eduHtml = siteConfig.education.map(edu => `
    <div class="relative pl-8 sm:pl-32 py-6 group">
      <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-200 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-academic-gold after:border-4 after:box-content after:border-white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-academic-blue bg-academic-blue/10 rounded-full">${edu.year}</time>
        <div class="text-xl font-bold text-academic-navy">${edu.degree}</div>
      </div>
      <div class="text-academic-gold font-medium mb-2">${edu.institution}</div>
      <div class="text-gray-600">${edu.description}</div>
    </div>
  `).join('');

  const expHtml = siteConfig.experience.map(exp => `
    <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-4 transition-shadow hover:shadow-md">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <h4 class="text-lg font-bold text-academic-navy">${exp.role}</h4>
        <span class="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full w-max mt-2 sm:mt-0">${exp.year}</span>
      </div>
      <h5 class="text-academic-gold font-medium mb-3">${exp.organization}</h5>
      <p class="text-gray-600">${exp.description}</p>
    </div>
  `).join('');

  const awardsHtml = siteConfig.awards.map(award => `
    <li class="flex items-start mb-4">
      <div class="flex-shrink-0 mt-1">
        <i data-lucide="award" class="w-5 h-5 text-academic-gold"></i>
      </div>
      <div class="ml-3">
        <p class="text-sm font-semibold text-academic-navy">${award.year}</p>
        <p class="text-base font-medium text-gray-900">${award.title}</p>
        <p class="text-sm text-gray-500">${award.organization}</p>
      </div>
    </li>
  `).join('');

  return `
    <section id="about" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-display font-bold text-academic-navy sm:text-4xl">About Me</h2>
          <div class="w-24 h-1 bg-academic-gold mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <!-- Education Column -->
          <div class="lg:col-span-2">
            <h3 class="text-2xl font-bold text-academic-navy mb-8 flex items-center">
              <i data-lucide="graduation-cap" class="w-6 h-6 mr-3 text-academic-gold"></i>
              Education
            </h3>
            <div class="-my-6">
              ${eduHtml}
            </div>
            
            <h3 class="text-2xl font-bold text-academic-navy mt-16 mb-8 flex items-center">
              <i data-lucide="briefcase" class="w-6 h-6 mr-3 text-academic-gold"></i>
              Professional Experience
            </h3>
            <div>
              ${expHtml}
            </div>
          </div>
          
          <!-- Sidebar: Awards & Highlights -->
          <div class="lg:col-span-1">
            <div class="bg-academic-ivory p-8 rounded-2xl border border-gray-100 sticky top-28">
              <h3 class="text-xl font-bold text-academic-navy mb-6 uppercase tracking-wider text-sm border-b border-gray-200 pb-3">Honors & Awards</h3>
              <ul class="mb-8">
                ${awardsHtml}
              </ul>
              
              <h3 class="text-xl font-bold text-academic-navy mb-6 uppercase tracking-wider text-sm border-b border-gray-200 pb-3">Quick Overview</h3>
              <p class="text-gray-600 text-sm leading-relaxed mb-6">
                Recognized internationally for contributions to robust artificial intelligence and automated systems. Committed to translating complex models into societal impact.
              </p>
              <a href="#contact" class="inline-flex w-full justify-center items-center px-4 py-3 border border-academic-navy text-sm font-semibold rounded-md text-academic-navy hover:bg-academic-navy hover:text-white transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `;
}
