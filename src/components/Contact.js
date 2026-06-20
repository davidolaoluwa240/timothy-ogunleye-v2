import { siteConfig } from '../data/siteConfig';

export function createContact() {
  const newsHtml = siteConfig.news.map(item => `
    <div class="mb-6 pb-6 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0">
      <span class="text-sm font-bold text-academic-gold uppercase tracking-widest">${item.date}</span>
      <h4 class="font-bold text-academic-navy text-lg mt-2 mb-2">${item.title}</h4>
      <p class="text-gray-600 leading-relaxed">${item.summary}</p>
    </div>
  `).join('');

  const eventsHtml = siteConfig.events.map(event => `
    <div class="flex items-start mb-5">
      <div class="bg-academic-navy text-white px-3 py-2 text-center rounded-none mr-4 min-w-[70px]">
        <div class="text-xs uppercase font-bold text-academic-gold tracking-widest">${event.date.split(' ')[0]}</div>
        <div class="text-xl font-black">${event.date.split(' ')[1].replace(',', '')}</div>
      </div>
      <div>
        <h4 class="font-bold text-academic-navy text-lg leading-tight">${event.title}</h4>
        <p class="text-sm text-gray-500 mt-1 flex items-center">
          <i data-lucide="map-pin" class="w-3 h-3 mr-1"></i> ${event.location}
        </p>
      </div>
    </div>
  `).join('');

  return `
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          <div class="lg:col-span-8">
            <div id="news" class="mb-20 scroll-mt-32">
              <h2 class="text-3xl font-display font-black text-academic-navy sm:text-4xl uppercase tracking-widest border-b-2 border-academic-gold pb-4 mb-8 flex items-center">
                <i data-lucide="newspaper" class="w-8 h-8 mr-4 text-academic-gold"></i>
                Latest News
              </h2>
              <div class="bg-academic-ivory p-8 border border-gray-200">
                ${newsHtml}
              </div>
            </div>

            <div id="consultancy" class="mb-20 scroll-mt-32">
              <h2 class="text-3xl font-display font-black text-academic-navy sm:text-4xl uppercase tracking-widest border-b-2 border-academic-gold pb-4 mb-8 flex items-center">
                <i data-lucide="briefcase" class="w-8 h-8 mr-4 text-academic-gold"></i>
                Consultancy
              </h2>
              <div class="bg-academic-navy text-white p-8 border-l-8 border-academic-gold">
                <p class="text-lg leading-relaxed text-gray-300 italic">
                  ${siteConfig.consultancy.statement}
                </p>
              </div>
            </div>

            <div id="contact" class="mb-10 scroll-mt-32">
              <h2 class="text-3xl font-display font-black text-academic-navy sm:text-4xl uppercase tracking-widest border-b-2 border-academic-gold pb-4 mb-8 flex items-center">
                <i data-lucide="mail" class="w-8 h-8 mr-4 text-academic-gold"></i>
                Direct Inquiries
              </h2>
              <form class="space-y-6 bg-academic-ivory p-8 border border-gray-200" onsubmit="event.preventDefault(); alert('Message sent successfully.');">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-bold text-academic-navy mb-2 uppercase tracking-widest">First Name</label>
                    <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-academic-gold focus:border-academic-gold bg-white" required>
                  </div>
                  <div>
                    <label class="block text-sm font-bold text-academic-navy mb-2 uppercase tracking-widest">Last Name</label>
                    <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-academic-gold focus:border-academic-gold bg-white" required>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-bold text-academic-navy mb-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-academic-gold focus:border-academic-gold bg-white" required>
                </div>
                <div>
                  <label class="block text-sm font-bold text-academic-navy mb-2 uppercase tracking-widest">Message</label>
                  <textarea rows="4" class="w-full px-4 py-3 border border-gray-300 rounded-none focus:ring-academic-gold focus:border-academic-gold bg-white" required></textarea>
                </div>
                <button type="submit" class="px-8 py-4 bg-academic-navy text-white font-bold uppercase tracking-widest hover:bg-academic-gold transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>

          <div class="lg:col-span-4 space-y-12">
            <div id="events" class="scroll-mt-32">
              <h3 class="text-xl font-display font-black text-academic-navy mb-6 uppercase tracking-widest border-b border-gray-300 pb-3">Upcoming Events</h3>
              <div>
                ${eventsHtml}
              </div>
            </div>

            <div id="social-media" class="scroll-mt-32">
              <h3 class="text-xl font-display font-black text-academic-navy mb-6 uppercase tracking-widest border-b border-gray-300 pb-3">Social Media</h3>
              <div class="flex flex-wrap gap-4">
                ${siteConfig.socialMedia.map(social => `
                  <a href="${social.url}" class="w-12 h-12 flex items-center justify-center bg-academic-ivory border border-gray-200 text-gray-500 hover:bg-academic-navy hover:text-white transition-colors" aria-label="${social.platform}">
                    <i data-lucide="${social.icon || 'link'}" class="w-6 h-6"></i>
                  </a>
                `).join('')}
              </div>
            </div>
            
            <div class="bg-academic-navy p-8 text-white mt-8 border-t-4 border-academic-gold">
              <h3 class="text-xl font-display font-black text-white mb-6 uppercase tracking-widest border-b border-gray-700 pb-3">Office Info</h3>
              <ul class="space-y-6">
                <li class="flex items-start">
                  <i data-lucide="map-pin" class="w-6 h-6 mr-4 text-academic-gold shrink-0 mt-0.5"></i>
                  <span class="text-gray-300 text-sm leading-relaxed">${siteConfig.author.office}</span>
                </li>
                <li class="flex items-center">
                  <i data-lucide="phone" class="w-6 h-6 mr-4 text-academic-gold shrink-0"></i>
                  <span class="text-gray-300 text-sm">${siteConfig.author.phone}</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  `;
}
