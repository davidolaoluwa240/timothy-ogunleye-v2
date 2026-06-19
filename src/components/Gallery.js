import { siteConfig } from '../data/siteConfig';

export function createGallery() {
  const imagesHtml = siteConfig.gallery.map(image => `
    <figure class="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100 bg-gray-200 aspect-[4/3]">
      <img src="${image.url}" alt="${image.caption}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <figcaption class="absolute inset-0 bg-gradient-to-t from-academic-navy/80 via-academic-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <span class="text-white font-medium p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          ${image.caption}
        </span>
      </figcaption>
    </figure>
  `).join('');

  return `
    <section id="gallery" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-display font-bold text-academic-navy sm:text-4xl">Image Gallery</h2>
          <div class="w-24 h-1 bg-academic-gold mx-auto mt-4 rounded-full"></div>
          <p class="mt-6 text-gray-500 max-w-2xl mx-auto">Glimpses into recent academic activities, conferences, and laboratory work.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${imagesHtml}
        </div>
        
      </div>
    </section>
  `;
}
