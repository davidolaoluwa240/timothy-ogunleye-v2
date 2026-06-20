import { siteConfig } from '../data/siteConfig';

export function createAbout() {
  
  const eduHtml = siteConfig.education.map(edu => `
    <div class="relative pl-8 sm:pl-32 py-6 group">
      <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-200 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-academic-gold after:border-4 after:box-content after:border-white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-bold uppercase w-20 h-6 mb-3 sm:mb-0 text-academic-blue bg-academic-blue/10 rounded-none border border-academic-blue/20">${edu.year}</time>
        <div class="text-xl font-bold text-academic-navy font-display">${edu.degree}</div>
      </div>
      <div class="text-academic-gold font-bold mb-2 uppercase text-sm tracking-wider">${edu.institution}</div>
      <div class="text-gray-700 leading-relaxed">${edu.description}</div>
    </div>
  `).join('');

  const expHtml = siteConfig.experience.map(exp => `
    <div class="bg-white p-8 rounded-none border border-gray-200 mb-6 border-l-4 border-l-academic-navy">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
        <h4 class="text-xl font-bold text-academic-navy font-display">${exp.role}</h4>
        <span class="text-sm font-bold text-academic-navy bg-gray-100 px-4 py-1 rounded-none border border-gray-300 w-max mt-2 sm:mt-0">${exp.year}</span>
      </div>
      <h5 class="text-academic-gold font-bold mb-4 uppercase text-sm tracking-wider">${exp.organization}</h5>
      <p class="text-gray-700 leading-relaxed">${exp.description}</p>
    </div>
  `).join('');

  const membershipsHtml = siteConfig.memberships.map(mem => `
    <li class="flex items-start mb-3">
      <i data-lucide="check-circle" class="w-5 h-5 text-academic-gold mr-3 mt-0.5 shrink-0"></i>
      <span class="text-gray-800 font-medium">${mem.name}<span class="block text-sm font-normal text-gray-600 mt-1">${mem.detail}</span></span>
    </li>
  `).join('');

  const leadershipHtml = siteConfig.leadership.map(lead => `
    <div class="mb-4 pb-4 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
      <h4 class="font-bold text-academic-navy">${lead.role}</h4>
      <div class="text-sm text-gray-600 mt-1">${lead.organization} <span class="text-academic-gold mx-2">|</span> ${lead.duration}</div>
    </div>
  `).join('');

  const awardsHtml = siteConfig.awards.map(award => `
    <li class="flex items-start mb-5">
      <div class="flex-shrink-0 mt-1">
        <i data-lucide="award" class="w-6 h-6 text-academic-gold"></i>
      </div>
      <div class="ml-4">
        <p class="text-sm font-bold text-academic-blue uppercase tracking-widest">${award.year}</p>
        <p class="text-base font-bold text-academic-navy mt-1">${award.title}</p>
        <p class="text-sm text-gray-600 mt-1">${award.organization}</p>
      </div>
    </li>
  `).join('');

  return `
    <section id="about" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <!-- Main Content Column -->
          <div class="lg:col-span-8">
            
            <div id="biography" class="mb-16 scroll-mt-32">
              <h2 class="text-3xl font-display font-black text-academic-navy sm:text-4xl uppercase tracking-tight border-b-2 border-academic-gold pb-4 mb-8">Biography</h2>
              <p class="text-lg text-gray-700 leading-loose">${siteConfig.biography}</p>
            </div>

            <div id="education" class="mb-16 scroll-mt-32">
              <h2 class="text-3xl font-display font-black text-academic-navy sm:text-4xl uppercase tracking-tight border-b-2 border-academic-gold pb-4 mb-8 flex items-center">
                <i data-lucide="graduation-cap" class="w-8 h-8 mr-4 text-academic-gold"></i>
                Education
              </h2>
              <div class="-my-6 pl-4">
                ${eduHtml}
              </div>
            </div>
            
            <div id="experience" class="mb-16 scroll-mt-32">
              <h2 class="text-3xl font-display font-black text-academic-navy sm:text-4xl uppercase tracking-tight border-b-2 border-academic-gold pb-4 mb-8 flex items-center">
                <i data-lucide="briefcase" class="w-8 h-8 mr-4 text-academic-gold"></i>
                Professional Experience
              </h2>
              <div>
                ${expHtml}
              </div>
            </div>

          </div>
          
          <!-- Sidebar: Awards & Memberships -->
          <div class="lg:col-span-4 space-y-8">
            
            <div id="memberships" class="bg-academic-ivory p-8 border-t-4 border-academic-navy scroll-mt-32">
              <h3 class="text-xl font-display font-black text-academic-navy mb-6 uppercase tracking-widest border-b border-gray-200 pb-4">Memberships</h3>
              <ul class="">
                ${membershipsHtml}
              </ul>
            </div>

            <div id="leadership" class="bg-academic-ivory p-8 border-t-4 border-academic-navy scroll-mt-32">
              <h3 class="text-xl font-display font-black text-academic-navy mb-6 uppercase tracking-widest border-b border-gray-200 pb-4">Leadership</h3>
              <div>
                ${leadershipHtml}
              </div>
            </div>

            <div id="awards" class="bg-academic-navy p-8 border-t-4 border-academic-gold text-white scroll-mt-32">
              <h3 class="text-xl font-display font-black text-white mb-6 uppercase tracking-widest border-b border-gray-700 pb-4">Honors & Awards</h3>
              <ul>
                ${awardsHtml.replace(/text-academic-navy/g, 'text-white').replace(/text-gray-600/g, 'text-gray-300')}
              </ul>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  `;
}
