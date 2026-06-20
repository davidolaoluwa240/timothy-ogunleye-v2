import { resolve } from 'path';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
    main: resolve(__dirname, 'index.html'),
    'profile-summary': resolve(__dirname, 'profile-summary/index.html'),
    'research-highlights': resolve(__dirname, 'research-highlights/index.html'),
    'latest-news': resolve(__dirname, 'latest-news/index.html'),
    'quick-links': resolve(__dirname, 'quick-links/index.html'),
    'about': resolve(__dirname, '/about/index.html'),
    'about-biography': resolve(__dirname, 'about/biography/index.html'),
    'about-education': resolve(__dirname, 'about/education/index.html'),
    'about-experience': resolve(__dirname, 'about/experience/index.html'),
    'about-memberships': resolve(__dirname, 'about/memberships/index.html'),
    'about-awards': resolve(__dirname, 'about/awards/index.html'),
    'about-leadership': resolve(__dirname, 'about/leadership/index.html'),
    'research': resolve(__dirname, '/research/index.html'),
    'research-research-interests': resolve(__dirname, 'research/research-interests/index.html'),
    'research-projects': resolve(__dirname, 'research/projects/index.html'),
    'research-grants': resolve(__dirname, 'research/grants/index.html'),
    'research-collaborations': resolve(__dirname, 'research/collaborations/index.html'),
    'research-research-impact': resolve(__dirname, 'research/research-impact/index.html'),
    'publications': resolve(__dirname, '/publications/index.html'),
    'publications-journal-articles': resolve(__dirname, 'publications/journal-articles/index.html'),
    'publications-books': resolve(__dirname, 'publications/books/index.html'),
    'publications-conferences': resolve(__dirname, 'publications/conferences/index.html'),
    'publications-downloads': resolve(__dirname, 'publications/downloads/index.html'),
    'publications-academic-profiles': resolve(__dirname, 'publications/academic-profiles/index.html'),
    'teaching': resolve(__dirname, '/teaching/index.html'),
    'teaching-courses': resolve(__dirname, 'teaching/courses/index.html'),
    'teaching-teaching-philosophy': resolve(__dirname, 'teaching/teaching-philosophy/index.html'),
    'teaching-supervision': resolve(__dirname, 'teaching/supervision/index.html'),
    'teaching-trainings': resolve(__dirname, 'teaching/trainings/index.html'),
    'teaching-testimonials': resolve(__dirname, 'teaching/testimonials/index.html'),
    'news-events': resolve(__dirname, '/news-events/index.html'),
    'news-events-news': resolve(__dirname, 'news-events/news/index.html'),
    'news-events-events': resolve(__dirname, 'news-events/events/index.html'),
    'news-events-gallery': resolve(__dirname, 'news-events/gallery/index.html'),
    'news-events-consultancy': resolve(__dirname, 'news-events/consultancy/index.html'),
    'contact': resolve(__dirname, '/contact/index.html'),
    'contact-contact': resolve(__dirname, 'contact/contact/index.html'),
    'contact-social-media': resolve(__dirname, 'contact/social-media/index.html'),
  }
    },
  },
});
