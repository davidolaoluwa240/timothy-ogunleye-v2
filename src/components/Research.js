import { siteConfig } from '../data/siteConfig';

export function createResearch() {
  
  const interestsHtml = siteConfig.researchInterests.map(interest => `
    <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white border border-gray-200 text-academic-navy shadow-sm hover:border-academic-gold hover:text-academic-blue transition-colors cursor-default">
      <i data-lucide="microscope" class="w-4 h-4 mr-2 text-gray-400"></i>
      ${interest}
    </span>
  `).join('');

  const projectsHtml = siteConfig.projects.map(project => `
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div class="p-8 flex-grow">
        <div class="flex justify-between items-start mb-4">
          <div class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${project.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}">
            ${project.status}
          </div>
          <span class="text-sm font-semibold text-academic-gold">${project.funding}</span>
        </div>
        <h3 class="text-xl font-bold text-academic-navy mb-3 leading-tight">${project.title}</h3>
        <p class="text-gray-600 text-sm leading-relaxed">${project.description}</p>
      </div>
      <div class="px-8 py-4 bg-gray-50 border-t border-gray-100">
        <a href="#" class="text-academic-blue hover:text-academic-navy font-medium text-sm flex items-center transition-colors">
          View Project Details <i data-lucide="arrow-right" class="w-4 h-4 ml-1"></i>
        </a>
      </div>
    </div>
  `).join('');

  return `
    <section id="research" class="py-24 bg-academic-ivory">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-display font-bold text-academic-navy sm:text-4xl">Research</h2>
          <div class="w-24 h-1 bg-academic-gold mx-auto mt-4 rounded-full"></div>
        </div>
        
        <!-- Research Interests -->
        <div class="mb-20 max-w-4xl mx-auto text-center">
          <h3 class="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-6">Core Areas of Focus</h3>
          <div class="flex flex-wrap justify-center gap-3">
            ${interestsHtml}
          </div>
        </div>
        
        <!-- Selected Projects -->
        <div>
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-2xl font-bold text-academic-navy flex items-center">
              <i data-lucide="flask-conical" class="w-6 h-6 mr-3 text-academic-gold"></i>
              Selected Projects & Grants
            </h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${projectsHtml}
          </div>
        </div>
        
      </div>
    </section>
  `;
}
