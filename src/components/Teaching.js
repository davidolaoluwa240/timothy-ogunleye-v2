import { siteConfig } from '../data/siteConfig';

export function createTeaching() {
  
  const coursesHtml = siteConfig.courses.map(course => `
    <div class="bg-white border-l-4 border-academic-gold p-6 shadow-sm hover:shadow-md transition-shadow">
      <div class="flex justify-between items-start mb-2">
        <span class="font-mono text-sm font-bold text-academic-blue">${course.code}</span>
        <span class="text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-1 rounded">${course.level}</span>
      </div>
      <h4 class="text-lg font-bold text-academic-navy mb-2">${course.name}</h4>
      <p class="text-gray-600 text-sm leading-relaxed">${course.description}</p>
    </div>
  `).join('');

  return `
    <section id="teaching" class="py-24 bg-academic-navy text-white relative overflow-hidden">
      
      <!-- Subtle Background Pattern -->
      <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(#D4AF37 1px, transparent 1px); background-size: 24px 24px;"></div>
      
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-display font-bold text-white sm:text-4xl">Teaching & Mentorship</h2>
          <div class="w-24 h-1 bg-academic-gold mx-auto mt-4 rounded-full"></div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <!-- Teaching Philosophy -->
          <div>
            <h3 class="text-2xl font-bold text-academic-gold mb-6 flex items-center">
              <i data-lucide="lightbulb" class="w-6 h-6 mr-3"></i>
              Teaching Philosophy
            </h3>
            <blockquote class="relative p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <i data-lucide="quote" class="absolute top-4 left-4 w-12 h-12 text-white/10 -z-10"></i>
              <p class="text-lg leading-relaxed text-gray-200 font-medium italic">
                "${siteConfig.teachingPhilosophy}"
              </p>
              <footer class="mt-6">
                <p class="text-base font-bold text-white">— ${siteConfig.author.name}</p>
              </footer>
            </blockquote>
          </div>
          
          <!-- Courses -->
          <div>
            <h3 class="text-2xl font-bold text-academic-gold mb-6 flex items-center">
              <i data-lucide="users" class="w-6 h-6 mr-3"></i>
              Current Courses
            </h3>
            <div class="space-y-4">
              ${coursesHtml}
            </div>
            <div class="mt-8 text-center sm:text-left">
              <a href="#" class="inline-flex items-center text-academic-ivory hover:text-white font-medium transition-colors border-b border-academic-gold pb-1">
                View Full Teaching History & Syllabi
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  `;
}
