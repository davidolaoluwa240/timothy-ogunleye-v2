import { siteConfig } from '../data/siteConfig';

export function createResearch() {
  const interestsHtml = siteConfig.researchInterests.map(interest => `
    <span class="inline-flex items-center px-4 py-2 rounded-none border border-academic-gold bg-academic-ivory text-sm font-bold text-academic-navy uppercase tracking-wider">
      ${interest.title}
    </span>
  `).join('');

  const projectsHtml = siteConfig.projects.map(project => `
    <div class="bg-white p-8 border border-gray-200 border-l-4 ${project.status === 'Ongoing' ? 'border-l-academic-blue' : 'border-l-gray-400'} shadow-sm hover:shadow-md transition-shadow">
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-display font-bold text-academic-navy leading-tight pr-4">${project.title}</h3>
        <span class="inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider ${project.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}">
          ${project.status}
        </span>
      </div>
      <p class="text-sm font-bold text-academic-gold mb-4 uppercase tracking-widest flex items-center">
        <i data-lucide="coins" class="w-4 h-4 mr-2"></i> ${project.funding}
      </p>
      <p class="text-gray-700 leading-relaxed">${project.description}</p>
    </div>
  `).join('');

  const grantsHtml = siteConfig.grants.map(grant => `
    <tr class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td class="py-4 px-4 font-bold text-academic-navy">${grant.title}</td>
      <td class="py-4 px-4 text-gray-600">${grant.agency}</td>
      <td class="py-4 px-4 text-academic-gold font-semibold">${grant.amount}</td>
      <td class="py-4 px-4 text-gray-500 whitespace-nowrap">${grant.period}</td>
      <td class="py-4 px-4 text-gray-700 font-medium">${grant.role}</td>
    </tr>
  `).join('');

  const collabHtml = siteConfig.collaborations.map(collab => `
    <div class="p-6 bg-academic-ivory border border-gray-200">
      <h4 class="font-bold text-academic-navy text-lg mb-2 flex items-center">
        <i data-lucide="globe" class="w-5 h-5 mr-2 text-academic-gold"></i>
        ${collab.partner}
      </h4>
      <p class="text-gray-600 text-sm leading-relaxed">${collab.topic}</p>
    </div>
  `).join('');

  return `
    <section id="research" class="py-24 bg-academic-ivory">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-display font-black text-academic-navy sm:text-4xl uppercase tracking-widest border-b-2 border-academic-gold pb-4 inline-block">Research Portfolio</h2>
        </div>
        
        <div id="research-interests" class="mb-16 scroll-mt-32">
          <h3 class="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Core Focus Areas</h3>
          <div class="flex flex-wrap gap-3">
            ${interestsHtml}
          </div>
        </div>
        
        <div id="research-impact" class="mb-20 scroll-mt-32 bg-academic-navy text-white p-10 border-l-8 border-academic-gold">
          <h3 class="text-xl font-display font-black mb-4 uppercase tracking-widest flex items-center">
            <i data-lucide="zap" class="w-6 h-6 mr-3 text-academic-gold"></i>
            Global Research Impact
          </h3>
          <p class="text-lg text-gray-300 leading-relaxed italic border-l-2 border-gray-600 pl-6 py-2">
            "${siteConfig.researchImpact.statement}"
          </p>
        </div>

        <div id="projects" class="mb-20 scroll-mt-32">
          <h3 class="text-2xl font-display font-black text-academic-navy mb-8 uppercase border-b border-gray-300 pb-3">Selected Projects</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            ${projectsHtml}
          </div>
        </div>

        <div id="grants" class="mb-20 scroll-mt-32">
          <h3 class="text-2xl font-display font-black text-academic-navy mb-8 uppercase border-b border-gray-300 pb-3">Active & Past Grants</h3>
          <div class="overflow-x-auto bg-white border border-gray-200 shadow-sm">
            <table class="min-w-full text-left text-sm">
              <thead class="bg-academic-navy text-white font-bold uppercase tracking-wider">
                <tr>
                  <th scope="col" class="py-4 px-4">Project Title</th>
                  <th scope="col" class="py-4 px-4">Funding Agency</th>
                  <th scope="col" class="py-4 px-4">Amount</th>
                  <th scope="col" class="py-4 px-4">Period</th>
                  <th scope="col" class="py-4 px-4">Role</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                ${grantsHtml}
              </tbody>
            </table>
          </div>
        </div>

        <div id="collaborations" class="scroll-mt-32">
          <h3 class="text-2xl font-display font-black text-academic-navy mb-8 uppercase border-b border-gray-300 pb-3">International Collaborations</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${collabHtml}
          </div>
        </div>
        
      </div>
    </section>
  `;
}
