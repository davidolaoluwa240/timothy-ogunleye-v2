import { siteConfig } from '../data/siteConfig';

export function createPublications() {
  
  const articlesHtml = siteConfig.publications.articles.map(article => `
    <div class="py-5 border-b border-gray-100 last:border-0 group">
      <div class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
        <span class="text-sm font-bold text-academic-gold whitespace-nowrap">${article.year}</span>
        <div class="flex-grow">
          <p class="text-gray-800 leading-relaxed text-sm sm:text-base">${article.citation}</p>
        </div>
        <a href="${article.link}" class="inline-flex items-center text-sm font-medium text-academic-blue hover:text-academic-navy transition-colors shrink-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100">
          Read <i data-lucide="external-link" class="w-3 h-3 ml-1"></i>
        </a>
      </div>
    </div>
  `).join('');

  const booksHtml = siteConfig.publications.books.map(book => `
    <div class="flex bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
      <div class="bg-gray-100 w-24 sm:w-32 flex-shrink-0 flex items-center justify-center border-r border-gray-100">
        <i data-lucide="book" class="w-8 h-8 text-gray-400"></i>
      </div>
      <div class="p-6 flex-grow">
        <span class="inline-block px-2 py-1 bg-academic-blue/10 text-academic-blue text-xs font-bold rounded mb-2">${book.year}</span>
        <p class="text-gray-800 text-sm sm:text-base leading-relaxed">${book.citation}</p>
      </div>
    </div>
  `).join('');

  return `
    <section id="publications" class="py-24 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-display font-bold text-academic-navy sm:text-4xl">Publications & Resources</h2>
          <div class="w-24 h-1 bg-academic-gold mx-auto mt-4 rounded-full"></div>
          <p class="mt-6 text-gray-500 max-w-2xl mx-auto">A selection of peer-reviewed journal articles, conference papers, and published books.</p>
        </div>
        
        <div class="mb-16">
          <h3 class="text-xl font-bold text-academic-navy mb-6 flex items-center border-b border-gray-200 pb-3">
            <i data-lucide="file-text" class="w-5 h-5 mr-3 text-academic-gold"></i>
            Selected Journal Articles
          </h3>
          <div class="bg-academic-ivory p-6 sm:p-8 rounded-xl border border-gray-100">
            ${articlesHtml}
          </div>
          <div class="mt-6 text-center">
            <a href="#" class="inline-flex items-center text-academic-blue hover:text-academic-navy font-medium transition-colors">
              View Full Publication List on Google Scholar <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-academic-navy mb-6 flex items-center border-b border-gray-200 pb-3">
            <i data-lucide="book-open" class="w-5 h-5 mr-3 text-academic-gold"></i>
            Books & Chapters
          </h3>
          <div>
            ${booksHtml}
          </div>
        </div>
        
      </div>
    </section>
  `;
}
