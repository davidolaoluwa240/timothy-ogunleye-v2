import { siteConfig } from '../data/siteConfig';

export function createTeaching() {
  const coursesHtml = siteConfig.courses.map(course => `
    <div class="bg-white p-8 border border-gray-200 border-t-4 border-t-academic-navy hover:shadow-lg transition-shadow">
      <div class="flex justify-between items-start mb-4">
        <h4 class="text-xl font-bold text-academic-navy font-display">${course.name}</h4>
        <span class="text-xs font-bold text-academic-navy bg-gray-100 px-3 py-1 uppercase tracking-widest border border-gray-300">
          ${course.code}
        </span>
      </div>
      <p class="text-sm font-bold text-academic-gold mb-4 uppercase tracking-widest flex items-center">
        <i data-lucide="users" class="w-4 h-4 mr-2"></i> ${course.level} Level
      </p>
      <p class="text-gray-700 leading-relaxed">${course.description}</p>
    </div>
  `).join('');

  const supervisionHtml = siteConfig.supervision.map(sup => `
    <div class="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
      <h4 class="font-bold text-academic-navy text-lg">${sup.student} <span class="text-gray-400 font-normal ml-2">(${sup.degree})</span></h4>
      <div class="text-sm font-bold text-academic-gold uppercase tracking-widest mt-1 mb-2">${sup.status}</div>
      <p class="text-gray-700 italic">Topic: ${sup.topic}</p>
      ${sup.currentRole ? `<p class="text-sm font-bold text-academic-blue mt-2">Currently: ${sup.currentRole}</p>` : ''}
    </div>
  `).join('');

  const trainingsHtml = siteConfig.trainings.map(training => `
    <div class="bg-academic-ivory p-6 border border-gray-200 mb-4 border-l-4 border-l-academic-gold">
      <h4 class="font-bold text-academic-navy text-lg mb-2">${training.title}</h4>
      <p class="text-gray-700">${training.description}</p>
    </div>
  `).join('');

  const testimonialsHtml = siteConfig.testimonials.map(test => `
    <blockquote class="bg-academic-navy p-8 text-white relative">
      <i data-lucide="quote" class="absolute top-4 left-4 w-12 h-12 text-gray-700 opacity-30"></i>
      <p class="relative z-10 text-lg italic leading-relaxed text-gray-300 mb-6">"${test.text}"</p>
      <footer class="relative z-10 font-bold text-academic-gold uppercase tracking-widest text-sm">&mdash; ${test.author}</footer>
    </blockquote>
  `).join('');

  return `
    <section id="teaching" class="py-24 bg-academic-ivory">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-20">
          <h2 class="text-3xl font-display font-black text-academic-navy sm:text-4xl uppercase tracking-widest border-b-2 border-academic-gold pb-4 inline-block">Teaching & Mentorship</h2>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div class="lg:col-span-8">
            <div id="teaching-philosophy" class="mb-16 scroll-mt-32">
              <h3 class="text-2xl font-display font-black text-academic-navy mb-8 uppercase tracking-widest border-b border-gray-300 pb-3 flex items-center">
                <i data-lucide="lightbulb" class="w-6 h-6 mr-3 text-academic-gold"></i>
                Teaching Philosophy
              </h3>
              <p class="text-lg text-gray-700 leading-loose">${siteConfig.teachingPhilosophy}</p>
            </div>

            <div id="courses" class="mb-16 scroll-mt-32">
              <h3 class="text-2xl font-display font-black text-academic-navy mb-8 uppercase tracking-widest border-b border-gray-300 pb-3 flex items-center">
                <i data-lucide="book-open" class="w-6 h-6 mr-3 text-academic-gold"></i>
                Current Courses
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${coursesHtml}
              </div>
            </div>

            <div id="supervision" class="mb-16 scroll-mt-32">
              <h3 class="text-2xl font-display font-black text-academic-navy mb-8 uppercase tracking-widest border-b border-gray-300 pb-3 flex items-center">
                <i data-lucide="users" class="w-6 h-6 mr-3 text-academic-gold"></i>
                Student Supervision
              </h3>
              <div class="bg-white p-8 border border-gray-200">
                ${supervisionHtml}
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 space-y-12">
            <div id="trainings" class="scroll-mt-32">
              <h3 class="text-xl font-display font-black text-academic-navy mb-6 uppercase tracking-widest border-b border-gray-300 pb-3">Special Trainings</h3>
              <div>
                ${trainingsHtml}
              </div>
            </div>

            <div id="testimonials" class="scroll-mt-32">
              <h3 class="text-xl font-display font-black text-academic-navy mb-6 uppercase tracking-widest border-b border-gray-300 pb-3">Student Feedback</h3>
              <div>
                ${testimonialsHtml}
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  `;
}
