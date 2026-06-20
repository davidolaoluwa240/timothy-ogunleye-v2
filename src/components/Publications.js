import { siteConfig } from '../data/siteConfig';

export function createPublications() {
  const articlesHtml = siteConfig.publications.articles.map(article => `
    <li class="mb-6 pl-6 relative border-l-2 border-gray-200 hover:border-academic-gold transition-colors">
      <div class="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-academic-gold"></div>
      <div class="flex flex-col sm:flex-row sm:items-baseline">
        <span class="text-academic-navy font-bold mr-4 min-w-[50px]">${article.year}</span>
        <div>
          <p class="text-gray-800 leading-relaxed font-serif text-lg">${article.citation}</p>
          <a href="${article.link}" class="inline-flex items-center mt-2 text-sm font-bold text-academic-blue hover:text-academic-gold transition-colors uppercase tracking-widest">
            <i data-lucide="external-link" class="w-4 h-4 mr-1"></i> View Publication
          </a>
        </div>
      </div>
    </li>
  `).join('');

  const booksHtml = siteConfig.publications.books.map(book => `
    <li class="mb-6 pl-6 relative border-l-2 border-gray-200 hover:border-academic-gold transition-colors">
      <div class="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-academic-gold"></div>
      <div class="flex flex-col sm:flex-row sm:items-baseline">
        <span class="text-academic-navy font-bold mr-4 min-w-[50px]">${book.year}</span>
        <div>
          <p class="text-gray-800 leading-relaxed font-serif text-lg">${book.citation}</p>
          <a href="${book.link}" class="inline-flex items-center mt-2 text-sm font-bold text-academic-blue hover:text-academic-gold transition-colors uppercase tracking-widest">
            <i data-lucide="book" class="w-4 h-4 mr-1"></i> Publisher Link
          </a>
        </div>
      </div>
    </li>
  `).join('');

  const conferencesHtml = siteConfig.conferences.map(conf => `
    <div class="bg-academic-ivory p-6 border border-gray-200 mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h4 class="font-bold text-academic-navy text-lg">${conf.title}</h4>
        <p class="text-gray-600 mt-1">${conf.event} &bull; <span class="font-medium text-academic-gold">${conf.role}</span></p>
      </div>
      <div class="mt-4 md:mt-0">
        <span class="bg-white px-4 py-2 border border-gray-300 text-sm font-bold text-academic-navy">${conf.year}</span>
      </div>
    </div>
  `).join('');

  const downloadsHtml = siteConfig.downloads.map(dl => `
    <a href="${dl.url}" class="flex items-center justify-between p-4 bg-white border border-gray-200 hover:border-academic-gold group transition-colors">
      <div class="flex items-center">
        <i data-lucide="file-down" class="w-6 h-6 text-academic-blue group-hover:text-academic-gold mr-4 transition-colors"></i>
        <span class="font-bold text-academic-navy">${dl.title}</span>
      </div>
      <span class="text-sm text-gray-500 font-mono bg-gray-100 px-2 py-1">${dl.size}</span>
    </a>
  `).join('');

  const profilesHtml = siteConfig.academicProfiles.map(profile => `
    <a href="#" class="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 hover:border-academic-navy transition-colors">
      <i data-lucide="library" class="w-8 h-8 text-academic-gold mb-3"></i>
      <span class="font-bold text-academic-navy">${profile.name}</span>
      <span class="text-xs text-gray-500 mt-1 font-mono">${profile.id}</span>
    </a>
  `).join('');

  return `
    <section id="publications" class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-20">
          <h2 class="text-3xl font-display font-black text-academic-navy sm:text-4xl uppercase tracking-widest border-b-2 border-academic-gold pb-4 inline-block">Publications & Resources</h2>
        </div>
        
        <div id="journal-articles" class="mb-20 scroll-mt-32">
          <h3 class="text-2xl font-display font-black text-academic-navy mb-8 flex items-center border-b border-gray-200 pb-3 uppercase tracking-widest">
            <i data-lucide="file-text" class="w-6 h-6 mr-3 text-academic-gold"></i>
            Peer-Reviewed Articles
          </h3>
          <ul class="list-none space-y-2">
            ${articlesHtml}
          </ul>
        </div>
        
        <div id="books" class="mb-20 scroll-mt-32">
          <h3 class="text-2xl font-display font-black text-academic-navy mb-8 flex items-center border-b border-gray-200 pb-3 uppercase tracking-widest">
            <i data-lucide="book-open" class="w-6 h-6 mr-3 text-academic-gold"></i>
            Books & Chapters
          </h3>
          <ul class="list-none space-y-2">
            ${booksHtml}
          </ul>
        </div>

        <div id="conferences" class="mb-20 scroll-mt-32">
          <h3 class="text-2xl font-display font-black text-academic-navy mb-8 flex items-center border-b border-gray-200 pb-3 uppercase tracking-widest">
            <i data-lucide="mic" class="w-6 h-6 mr-3 text-academic-gold"></i>
            Conferences & Talks
          </h3>
          <div>
            ${conferencesHtml}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div id="downloads" class="scroll-mt-32">
            <h3 class="text-xl font-display font-black text-academic-navy mb-6 uppercase tracking-widest border-b border-gray-200 pb-3">Downloads</h3>
            <div class="flex flex-col space-y-3">
              ${downloadsHtml}
            </div>
          </div>

          <div id="academic-profiles" class="scroll-mt-32">
            <h3 class="text-xl font-display font-black text-academic-navy mb-6 uppercase tracking-widest border-b border-gray-200 pb-3">Academic Profiles</h3>
            <div class="grid grid-cols-2 gap-4">
              ${profilesHtml}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  `;
}
